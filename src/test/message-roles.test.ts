import { describe, expect, test } from 'vitest';
import { normalizeMessageRoles } from '../message-roles.js';

const msg = (role: 'user' | 'assistant' | 'system', content: string) => ({ role, content });

describe('normalizeMessageRoles', () => {
  test('returns an empty array unchanged', () => {
    expect(normalizeMessageRoles([])).toEqual([]);
  });

  test('keeps a single leading system message as-is', () => {
    const input = [msg('system', 'be concise')];
    expect(normalizeMessageRoles(input)).toEqual(input);
  });

  test('merges consecutive leading system messages into one joined by blank lines', () => {
    const input = [msg('system', 'rule A'), msg('system', 'rule B'), msg('user', 'hi')];
    expect(normalizeMessageRoles(input)).toEqual([
      { role: 'system', content: 'rule A\n\nrule B' },
      { role: 'user', content: 'hi' },
    ]);
  });

  test('relocates a system message appearing after user/assistant turns into the leading block', () => {
    const input = [
      msg('system', 'base instructions'),
      msg('user', 'hello'),
      msg('assistant', 'hi'),
      msg('system', 'format: xml'),
    ];
    expect(normalizeMessageRoles(input)).toEqual([
      { role: 'system', content: 'base instructions\n\nformat: xml' },
      { role: 'user', content: 'hello' },
      { role: 'assistant', content: 'hi' },
    ]);
  });

  test('hoists a trailing-only system message to the front when there is no preceding system turn', () => {
    const input = [msg('user', 'hi'), msg('assistant', 'hey'), msg('system', 'format: json')];
    expect(normalizeMessageRoles(input)).toEqual([
      { role: 'system', content: 'format: json' },
      { role: 'user', content: 'hi' },
      { role: 'assistant', content: 'hey' },
    ]);
  });

  test('does not alter an already-canonical user/assistant-only conversation', () => {
    const input = [msg('user', 'q1'), msg('assistant', 'a1'), msg('user', 'q2')];
    expect(normalizeMessageRoles(input)).toEqual(input);
  });

  test('preserves intervening user/assistant order when relocating a late system message', () => {
    const input = [msg('system', 'sys'), msg('user', 'u1'), msg('system', 'mid-sys'), msg('assistant', 'a1')];
    expect(normalizeMessageRoles(input)).toEqual([
      { role: 'system', content: 'sys\n\nmid-sys' },
      { role: 'user', content: 'u1' },
      { role: 'assistant', content: 'a1' },
    ]);
  });
});
