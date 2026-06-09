import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

export function getEntryKeys(entry: Pick<WIEntry, 'key'> | null | undefined): string[] {
  return Array.isArray(entry?.key) ? entry.key : [];
}

export function normalizeEntry(entry: WIEntry): WIEntry {
  return {
    ...entry,
    key: getEntryKeys(entry),
    comment: entry.comment ?? '',
    content: entry.content ?? '',
  };
}
