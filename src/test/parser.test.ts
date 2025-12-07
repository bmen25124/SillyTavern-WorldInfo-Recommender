import { describe, test, expect } from 'vitest';
import { parseResponse } from '../parsers.js';

const mockSchema = {
  type: 'object',
  properties: {
    justification: { type: 'string' },
    add: {
      type: 'array',
      items: {
        type: 'object',
        required: ['worldName', 'name'],
        properties: {
          worldName: { type: 'string' },
          name: { type: 'string' },
          triggers: { type: 'array', items: { type: 'string' } },
          content: { type: 'string' },
        },
      },
    },
    remove: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          worldName: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
    // Simple array of strings for testing simpler structures
    keywords: {
      type: 'array',
      items: { type: 'string' },
    },
  },
};

describe('parseResponse', () => {
  describe('JSON format', () => {
    test('parses simple JSON object', () => {
      const input = '{"key": "value"}';
      const result = parseResponse(input, 'json');
      expect(result).toEqual({ key: 'value' });
    });

    test('parses JSON inside markdown code blocks', () => {
      const input = 'Here is the data:\n```json\n{"key": "value"}\n```';
      const result = parseResponse(input, 'json');
      expect(result).toEqual({ key: 'value' });
    });

    test('throws error on invalid JSON', () => {
      const input = '{"key": "value"'; // Missing closing brace
      expect(() => parseResponse(input, 'json')).toThrow();
    });
  });

  describe('XML format with Schema Enforcement', () => {
    test('parses simple XML', () => {
      const input = '<root><justification>Test</justification></root>';
      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;
      expect(result.justification).toBe('Test');
    });

    test('handles empty self-closing tags for arrays (fixes empty string bug)', () => {
      // LLM often outputs <add/> or <keywords/> which parses to "" instead of []
      const input = `
        <root>
          <justification>None</justification>
          <add/>
          <keywords/>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add).toHaveLength(0);

      expect(Array.isArray(result.keywords)).toBe(true);
      expect(result.keywords).toHaveLength(0);
    });

    test('unwraps incorrectly nested "item" tags (fixes wrapping bug)', () => {
      // LLM output: <add><item><worldName>...</worldName>...</item></add>
      // Schema expects: add: [{ worldName: ... }]
      const input = `
        <root>
          <add>
            <item>
              <worldName>Earth</worldName>
              <name>Entry1</name>
              <content>Content1</content>
            </item>
          </add>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add).toHaveLength(1);
      // It should have stripped the "item" wrapper
      expect(result.add[0]).toHaveProperty('worldName', 'Earth');
      expect(result.add[0]).not.toHaveProperty('item');
    });

    test('unwraps multiple incorrectly nested items', () => {
      const input = `
        <root>
          <add>
            <item>
              <worldName>W1</worldName>
              <name>N1</name>
            </item>
            <item>
              <worldName>W2</worldName>
              <name>N2</name>
            </item>
          </add>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(result.add).toHaveLength(2);
      expect(result.add[0].name).toBe('N1');
      expect(result.add[1].name).toBe('N2');
    });

    test('handles mixed correctly and incorrectly formatted fields', () => {
      // <add> is wrapped in <item>, <remove> is correct
      const input = `
        <root>
          <add>
            <item>
              <worldName>W1</worldName>
              <name>N1</name>
            </item>
          </add>
          <remove>
            <worldName>W2</worldName>
            <name>N2</name>
          </remove>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      // Add should be unwrapped
      expect(result.add[0].worldName).toBe('W1');

      // Remove should be coerced to array normally
      expect(result.remove[0].worldName).toBe('W2');
    });

    test('coerces single object to array', () => {
      const input = `
        <root>
          <add>
            <worldName>W1</worldName>
            <name>N1</name>
          </add>
        </root>
      `;
      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;
      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add[0].name).toBe('N1');
    });
  });
});
