function escapeXml(text: any): string {
  const s = String(text);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function jsonToXmlFragment(value: any, indent = 0): string {
  const indentation = '  '.repeat(indent);

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (item !== null && typeof item === 'object') {
          return `${indentation}<item>\n${jsonToXmlFragment(item, indent + 1)}${indentation}</item>\n`;
        }
        return `${indentation}<item>${escapeXml(item)}</item>\n`;
      })
      .join('');
  }

  if (value !== null && typeof value === 'object') {
    let xml = '';
    for (const key of Object.keys(value)) {
      const v = value[key];
      if (v !== null && typeof v === 'object') {
        xml += `${indentation}<${key}>\n${jsonToXmlFragment(v, indent + 1)}${indentation}</${key}>\n`;
      } else {
        xml += `${indentation}<${key}>${escapeXml(v)}</${key}>\n`;
      }
    }
    return xml;
  }

  return `${indentation}<value>${escapeXml(value)}</value>\n`;
}

export function schemaToExample(schema: any, format: 'json' | 'xml'): string {
  const example = generateExample(schema);
  if (format === 'xml') {
    // Create a root element for the XML example
    return `<root>\n${jsonToXmlFragment(example, 1)}</root>`;
  }
  return JSON.stringify(example, null, 2);
}

function pickFirstDefined<T>(...vals: T[]): T | undefined {
  for (const v of vals) if (v !== undefined) return v;
  return undefined;
}

function nonNullType(t: any): any {
  if (Array.isArray(t)) return t.find((x) => x !== 'null') ?? t[0];
  return t;
}

function generateExample(schema: any): any {
  if (!schema || typeof schema !== 'object') return null;

  const fromExamples = Array.isArray(schema.examples) ? schema.examples[0] : undefined;
  const preferred = pickFirstDefined(schema.example, fromExamples, schema.default);
  if (preferred !== undefined) return preferred;

  if (schema.const !== undefined) return schema.const;
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];

  const firstAlt = Array.isArray(schema.anyOf)
    ? schema.anyOf[0]
    : Array.isArray(schema.oneOf)
      ? schema.oneOf[0]
      : undefined;
  if (firstAlt) return generateExample(firstAlt);

  const t = nonNullType(schema.type);

  switch (t) {
    case 'object': {
      const obj: Record<string, any> = {};
      const props = schema.properties || {};
      for (const key of Object.keys(props)) {
        obj[key] = generateExample(props[key]);
      }
      if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
        obj.additionalProperty = generateExample(schema.additionalProperties);
      }
      return obj;
    }
    case 'array': {
      const itemSchema = schema.items ?? {};
      return [generateExample(itemSchema)];
    }
    case 'string':
      return schema.title || schema.description || 'string';
    case 'integer':
    case 'number':
      return 0;
    case 'boolean':
      return false;
    case 'null':
      return null;
    default: {
      if (schema.properties || schema.additionalProperties) return generateExample({ ...schema, type: 'object' });
      if (schema.items) return generateExample({ ...schema, type: 'array' });
      return null;
    }
  }
}
