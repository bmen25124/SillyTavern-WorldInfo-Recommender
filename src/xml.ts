import { XMLParser } from 'fast-xml-parser';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { ExtendedWIEntry } from './types.js';

const parser = new XMLParser();

function createRandomNumber(length: number): number {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface XmlParseOptions {
  previousContent?: string;
}

export function parseXMLOwn(xml: string, options: XmlParseOptions = {}): Record<string, ExtendedWIEntry[]> {
  let processedXml = xml;
  const { previousContent } = options;

  // Remove code blocks
  processedXml = processedXml.replace(/```xml/g, '').replace(/```/g, '');

  // Merge with previous content if exists
  if (previousContent) {
    processedXml = previousContent + processedXml.trimEnd();
  }

  // Ensure XML is complete by checking for imbalanced tags
  if (processedXml.includes('<entry>') && !processedXml.includes('</entry>')) {
    throw new Error('Incomplete XML: Missing </entry> tag');
  }
  if (processedXml.includes('<content>') && !processedXml.includes('</content>')) {
    throw new Error('Incomplete XML: Missing </content> tag');
  }

  const entriesByWorldName: Record<string, ExtendedWIEntry[]> = {};
  try {
    const rawResponse = parser.parse(processedXml);
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
        keysecondary: [],
        position: entry.position !== undefined ? Number(entry.position) : undefined,
        depth: entry.depth !== undefined ? Number(entry.depth) : null,
        roleAtDepth: entry.roleAtDepth !== undefined ? Number(entry.roleAtDepth) : null,
      });
    }

    return entriesByWorldName;
  } catch (error: any) {
    console.error(error);
    throw new Error('Model response is not valid XML');
  }
}

export function getPrefilledXML(worldName: string, entry: WIEntry): string {
  return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
    <content>${entry.content}`;
}

export function getFullXML(worldName: string, entry: WIEntry): string {
  return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
    <content>${entry.content}</content>
  </entry>
</lorebooks>`;
}
