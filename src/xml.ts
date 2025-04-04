import { XMLParser } from 'fast-xml-parser';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

const parser = new XMLParser();

function createRandomNumber(length: number): number {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function parseXMLOwn(xml: string): Record<string, WIEntry[]> {
  // Remove code blocks
  const xmlWithoutCodeBlocks = xml.replace(/```xml/g, '').replace(/```/g, '');

  const entriesByWorldName: Record<string, WIEntry[]> = {};
  try {
    const rawResponse = parser.parse(xmlWithoutCodeBlocks);
    // console.log('Raw response', rawResponse);
    if (!rawResponse.lorebooks) {
      return entriesByWorldName;
    }

    const entries = rawResponse.lorebooks.entry?.content ? [rawResponse.lorebooks.entry] : rawResponse.lorebooks.entry;
    for (const entry of entries) {
      const worldName = entry.worldName;
      if (!worldName) {
        continue;
      }
      if (!entriesByWorldName[worldName]) {
        entriesByWorldName[worldName] = [];
      }
      entriesByWorldName[worldName].push({
        uid: entry.id ?? createRandomNumber(6),
        key: entry.triggers?.split(',').map((t: string) => t.trim()) ?? [],
        content: entry.content,
        comment: entry.name,
        disable: false,
      });
    }

    return entriesByWorldName;
  } catch (error: any) {
    console.error(error);
    throw new Error('Model response is not valid XML');
  }
}
