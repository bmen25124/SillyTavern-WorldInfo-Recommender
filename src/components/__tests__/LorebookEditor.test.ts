import { jest } from '@jest/globals';
jest.mock('sillytavern-utils-lib/components', () => ({
  STButton: () => null,
  STFancyDropdown: () => null,
}));
jest.mock('sillytavern-utils-lib/config', () => ({
  st_echo: jest.fn(),
}));
import {
  buildFirstWordReferenceEntries,
  buildFirstWordGrouping,
  filterEntriesByFirstWord,
  getEntryFirstWord,
  extractDateFromContent,
  sortEntriesByCustom,
  sortEntriesByDate,
  sortEntriesByName,
  sortEntriesByOrder,
  sortEntriesByUid,
} from '../LorebookEditor.js';
import type { ExtendedWIEntry } from '../../types.js';

describe('LorebookEditor single-world sorting', () => {
  const entries = [
    { uid: 2, comment: 'Bravo', key: [], keysecondary: [], content: '', disable: false, position: 0 },
    { uid: 1, comment: 'Alpha', key: [], keysecondary: [], content: '', disable: false, position: 0 },
    { uid: 3, comment: 'Charlie', key: [], keysecondary: [], content: '', disable: false, position: 0 },
  ] as unknown as ExtendedWIEntry[];

  test('sortEntriesByName orders alphabetically within one world', () => {
    const sorted = sortEntriesByName(entries);
    expect(sorted.map((e) => e.uid)).toEqual([1, 2, 3]);
  });

  test('sortEntriesByName uses natural (numeric-aware) alphabetical ordering', () => {
    const numericEntries = [
      { uid: 201, comment: 'Chapter 1', key: [], keysecondary: [], content: '', disable: false, position: 0 },
      { uid: 210, comment: 'Chapter 10', key: [], keysecondary: [], content: '', disable: false, position: 0 },
      { uid: 202, comment: 'Chapter 2', key: [], keysecondary: [], content: '', disable: false, position: 0 },
      { uid: 220, comment: 'Chapter 20', key: [], keysecondary: [], content: '', disable: false, position: 0 },
      { uid: 203, comment: 'Chapter 3', key: [], keysecondary: [], content: '', disable: false, position: 0 },
    ] as unknown as ExtendedWIEntry[];

    const sorted = sortEntriesByName(numericEntries);
    expect(sorted.map((entry) => entry.comment)).toEqual([
      'Chapter 1',
      'Chapter 2',
      'Chapter 3',
      'Chapter 10',
      'Chapter 20',
    ]);
  });

  test('sortEntriesByName supports descending order', () => {
    const sorted = sortEntriesByName(entries, 'desc');
    expect(sorted.map((entry) => entry.uid)).toEqual([3, 2, 1]);
  });

  test('sortEntriesByUid orders numerically within one world', () => {
    const shuffled = [...entries].sort(() => 0.5 - Math.random());
    const sorted = sortEntriesByUid(shuffled);
    expect(sorted.map((e) => e.uid)).toEqual([1, 2, 3]);
  });

  test('sortEntriesByCustom follows the provided UID sequence and appends missing entries', () => {
    const customOrder = [1, 3];
    const sorted = sortEntriesByCustom(entries, customOrder);
    expect(sorted.map((e) => e.uid)).toEqual([1, 3, 2]);
  });

  test('sortEntriesByOrder orders by position then order value', () => {
    const unordered = [
      {
        uid: 1,
        comment: 'Before character high order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
        order: 100,
      },
      {
        uid: 2,
        comment: 'After character low order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 1,
        order: 5,
      },
      {
        uid: 3,
        comment: 'Before character low order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
        order: 5,
      },
      {
        uid: 4,
        comment: 'Before character no order first',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
      },
      {
        uid: 5,
        comment: 'Before character no order second',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
      },
      {
        uid: 6,
        comment: 'No position with order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        order: 1,
      },
    ] as unknown as ExtendedWIEntry[];

    const sorted = sortEntriesByOrder(unordered);

    expect(sorted.map((e) => e.uid)).toEqual([3, 1, 4, 5, 2, 6]);
  });

  test('sortEntriesByOrder supports descending order while keeping undefined values last', () => {
    const unordered = [
      {
        uid: 1,
        comment: 'Before character high order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
        order: 100,
      },
      {
        uid: 2,
        comment: 'After character low order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 1,
        order: 5,
      },
      {
        uid: 3,
        comment: 'Before character low order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
        order: 5,
      },
      {
        uid: 4,
        comment: 'Before character no order first',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
      },
      {
        uid: 5,
        comment: 'Before character no order second',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        position: 0,
      },
      {
        uid: 6,
        comment: 'No position with order',
        key: [],
        keysecondary: [],
        content: '',
        disable: false,
        order: 1,
      },
    ] as unknown as ExtendedWIEntry[];

    const sorted = sortEntriesByOrder(unordered, 'desc');

    expect(sorted.map((entry) => entry.uid)).toEqual([2, 1, 3, 4, 5, 6]);
  });

  test('sortEntriesByDate orders chronologically and keeps undated entries last', () => {
    type EntryWithOptionalName = ExtendedWIEntry & { name?: string };
    const baseEntry = {
      key: [] as string[],
      keysecondary: [] as string[],
      content: '',
      disable: false,
      position: 0,
    };

    const datedEntries: EntryWithOptionalName[] = [
      { ...baseEntry, uid: 101, comment: '001 - The new beginning - October 11, 2082' },
      { ...baseEntry, uid: 102, comment: 'Memory: Going back to town - May 12 2082' },
      { ...baseEntry, uid: 103, comment: 'Random note without a date' },
      { ...baseEntry, uid: 104, comment: '', name: 'Archive entry - January 5 2083' },
    ];

    const sorted = sortEntriesByDate(datedEntries);
    expect(sorted.map((entry) => entry.uid)).toEqual([102, 101, 104, 103]);
  });

  test('sortEntriesByDate supports descending order while keeping undated entries last', () => {
    type EntryWithOptionalName = ExtendedWIEntry & { name?: string };
    const baseEntry = {
      key: [] as string[],
      keysecondary: [] as string[],
      content: '',
      disable: false,
      position: 0,
    };

    const datedEntries: EntryWithOptionalName[] = [
      { ...baseEntry, uid: 101, comment: '001 - The new beginning - October 11, 2082' },
      { ...baseEntry, uid: 102, comment: 'Memory: Going back to town - May 12 2082' },
      { ...baseEntry, uid: 103, comment: 'Random note without a date' },
      { ...baseEntry, uid: 104, comment: '', name: 'Archive entry - January 5 2083' },
    ];

    const sorted = sortEntriesByDate(datedEntries, 'desc');
    expect(sorted.map((entry) => entry.uid)).toEqual([104, 101, 102, 103]);
  });
});

describe('extractDateFromContent', () => {
  test('detects numeric dates in month/day/year format', () => {
    expect(extractDateFromContent('Entry recorded on 05/04/2085 before departure.')).toBe('05/04/2085');
  });

  test('detects written month dates including abbreviations and ordinals', () => {
    expect(extractDateFromContent('Mission concluded on Sept. 12th, 2085 and recorded.')).toBe('Sept. 12th, 2085');
  });

  test('returns the earliest date regardless of style', () => {
    expect(
      extractDateFromContent('September 4, 2085 - follow up logged 10/01/2085 with additional details.'),
    ).toBe('September 4, 2085');
    expect(
      extractDateFromContent('03/10/2085 briefing before November 5, 2085 ceremony.'),
    ).toBe('03/10/2085');
  });

  test('returns null when no supported date is found', () => {
    expect(extractDateFromContent('No schedule available for this entry.')).toBeNull();
  });
});

describe('LorebookEditor first-word grouping', () => {
  const createEntry = (uid: number, comment: string) =>
    ({
      uid,
      comment,
      key: [],
      keysecondary: [],
      content: '',
      disable: false,
      position: 0,
    } as unknown as ExtendedWIEntry);

  test('getEntryFirstWord normalizes keys and keeps punctuation on the label', () => {
    expect(getEntryFirstWord(createEntry(1, '  Chapter 01: Dawn of time'))).toEqual({
      label: 'Chapter',
      key: 'chapter',
    });
    expect(getEntryFirstWord(createEntry(2, '\tLocation: Northern Reach'))).toEqual({
      label: 'Location:',
      key: 'location:',
    });
    expect(getEntryFirstWord(createEntry(3, '   '))).toEqual({
      label: '(no comment)',
      key: '__no_comment__',
    });
  });

  test('filterEntriesByFirstWord restricts results to the selected first words', () => {
    const entries = [
      createEntry(1, 'Chapter 1'),
      createEntry(2, 'chapter 2'),
      createEntry(3, 'Location: City'),
      createEntry(4, 'Location: Castle'),
      createEntry(5, 'Prologue overview'),
    ];

    const grouping = buildFirstWordGrouping(entries);
    expect(grouping.groups.get('chapter')?.count).toBe(2);
    expect(grouping.groups.get('chapter')?.label).toBe('Chapter');
    expect(grouping.keyByUid.get(2)).toBe('chapter');

    const filteredChapters = filterEntriesByFirstWord(entries, grouping, new Set(['chapter']));
    expect(filteredChapters.map((entry) => entry.uid)).toEqual([1, 2]);

    const filteredChaptersAndLocations = filterEntriesByFirstWord(
      entries,
      grouping,
      new Set(['chapter', 'location:']),
    );
    expect(filteredChaptersAndLocations.map((entry) => entry.uid)).toEqual([1, 2, 3, 4]);

    const filteredUnique = filterEntriesByFirstWord(entries, grouping, new Set(['prologue']));
    expect(filteredUnique.map((entry) => entry.uid)).toEqual([5]);

    const noSelection = filterEntriesByFirstWord(entries, grouping, new Set());
    expect(noSelection.map((entry) => entry.uid)).toEqual([1, 2, 3, 4, 5]);
  });

  test('buildFirstWordReferenceEntries preserves original first words for existing entries', () => {
    const originals = [createEntry(1, 'Hero backstory'), createEntry(2, 'Villain arc')];
    const drafts = [
      { ...originals[0], comment: 'Renamed hero arc' },
      { ...originals[1] },
    ];

    const result = buildFirstWordReferenceEntries(drafts, originals, new Map([
      [1, 1],
      [2, 2],
    ]));

    expect(result[0]).not.toBe(drafts[0]);
    expect(result[0].comment).toBe('Hero backstory');
    expect(result[1]).toBe(drafts[1]);
  });

  test('buildFirstWordReferenceEntries leaves new entries untouched', () => {
    const originals = [createEntry(1, 'Hero backstory')];
    const drafts = [createEntry(2, 'New recruit profile')];

    const result = buildFirstWordReferenceEntries(drafts, originals, new Map([[1, 1]]));

    expect(result).toBe(drafts);
  });

  test('buildFirstWordReferenceEntries resolves originals when UIDs change', () => {
    const originals = [createEntry(1, 'Hero backstory')];
    const drafts = [{ ...originals[0], uid: 101, comment: 'Renamed hero arc' }];

    const result = buildFirstWordReferenceEntries(drafts, originals, new Map([[101, 1]]));

    expect(result[0].comment).toBe('Hero backstory');
  });
});
