import { describe, expect, test } from 'vitest';
import { getMainSessionKey, loadMainSession, saveMainSession } from '../main-session-storage.js';
import type { Session } from '../generate.js';

class MemoryLocalForage {
  private items = new Map<string, unknown>();

  constructor(private failOnSet = false) {}

  async getItem<T>(key: string): Promise<T | null> {
    return (this.items.get(key) as T | undefined) ?? null;
  }

  async setItem<T>(key: string, value: T): Promise<T> {
    if (this.failOnSet) {
      throw new DOMException('The quota has been exceeded.', 'QuotaExceededError');
    }
    this.items.set(key, value);
    return value;
  }

  async removeItem(key: string): Promise<void> {
    this.items.delete(key);
  }
}

class MemoryLegacyStorage {
  private items = new Map<string, string>();

  getItem(key: string): string | null {
    return this.items.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.items.set(key, value);
  }

  removeItem(key: string): void {
    this.items.delete(key);
  }
}

const createSession = (): Session => ({
  suggestedEntries: {
    Lore: [
      {
        uid: 1,
        key: ['test'],
        content: 'Test content',
        comment: 'Test entry',
        disable: false,
        keysecondary: [],
      },
    ],
  },
  blackListedEntries: [],
  selectedWorldNames: ['Lore'],
  selectedEntryUids: { Lore: [1] },
  regexIds: {},
});

describe('main session storage', () => {
  test('loads and saves per-avatar sessions through localforage', async () => {
    const storage = new MemoryLocalForage();
    const session = createSession();

    expect((await saveMainSession('avatar', session, storage)).persisted).toBe(true);
    expect((await loadMainSession('avatar', storage, new MemoryLegacyStorage())).session).toEqual(session);
  });

  test('migrates legacy localStorage sessions into localforage', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();
    const session = createSession();
    const key = getMainSessionKey('avatar');

    legacyStorage.setItem(key, JSON.stringify(session));

    const result = await loadMainSession('avatar', storage, legacyStorage);

    expect(result.migrated).toBe(true);
    expect(result.session).toEqual(session);
    expect(await storage.getItem(key)).toEqual(session);
    expect(legacyStorage.getItem(key)).toBeNull();
  });

  test('does not throw when browser storage quota is exceeded', async () => {
    const storage = new MemoryLocalForage(true);

    const result = await saveMainSession('avatar', createSession(), storage);

    expect(result.persisted).toBe(false);
    expect(result.error).toBeInstanceOf(DOMException);
  });
});
