import { describe, expect, test } from 'vitest';
import { getEntryKeys, normalizeEntry } from '../entry-utils.js';

describe('entry utils', () => {
  test('uses an empty trigger list when entry key is missing', () => {
    expect(getEntryKeys({} as any)).toEqual([]);
    expect(getEntryKeys({ key: null } as any)).toEqual([]);
  });

  test('normalizes missing entry fields for rendering and apply paths', () => {
    const entry = normalizeEntry({ uid: 1, key: undefined, comment: undefined, content: undefined } as any);

    expect(entry.key).toEqual([]);
    expect(entry.comment).toBe('');
    expect(entry.content).toBe('');
  });
});
