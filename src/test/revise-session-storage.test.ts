import { describe, expect, test } from 'vitest';
import {
  loadReviseSessions,
  migrateReviseSessionsStorage,
  REVISE_SESSIONS_KEY,
  saveReviseSessions,
} from '../revise-session-storage.js';
import type { ReviseSession } from '../revise-types.js';

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

const createSession = (): ReviseSession => ({
  id: 'rs-1',
  name: 'Test session',
  type: 'global',
  createdAt: '2026-06-09T00:00:00.000Z',
  messages: [{ id: 'm-1', role: 'assistant', content: 'Done' }],
  context: { mainContextTemplatePreset: 'Default' },
  profileId: 'profile-1',
  promptEngineeringMode: 'native',
});

describe('revise session storage', () => {
  test('loads valid sessions from localforage storage', async () => {
    const storage = new MemoryLocalForage();
    const session = createSession();

    await storage.setItem(REVISE_SESSIONS_KEY, [session]);

    expect((await loadReviseSessions(storage)).sessions).toEqual([session]);
  });

  test('recovers from malformed localforage session data', async () => {
    const storage = new MemoryLocalForage();

    await storage.setItem(REVISE_SESSIONS_KEY, { invalid: true });

    const result = await loadReviseSessions(storage);
    expect(result.sessions).toEqual([]);
    expect(result.recovered).toBe(true);
    expect(await storage.getItem(REVISE_SESSIONS_KEY)).toEqual([]);
  });

  test('does not throw when browser storage quota is exceeded', async () => {
    const storage = new MemoryLocalForage(true);

    const result = await saveReviseSessions([createSession()], storage);

    expect(result.persisted).toBe(false);
    expect(result.error).toBeInstanceOf(DOMException);
  });

  test('migrates legacy localStorage sessions into localforage', async () => {
    const storage = new MemoryLocalForage();
    const legacyStorage = new MemoryLegacyStorage();
    const session = createSession();

    legacyStorage.setItem(REVISE_SESSIONS_KEY, JSON.stringify([session]));

    const result = await migrateReviseSessionsStorage(storage, legacyStorage);

    expect(result.migrated).toBe(true);
    expect(await storage.getItem(REVISE_SESSIONS_KEY)).toEqual([session]);
    expect(legacyStorage.getItem(REVISE_SESSIONS_KEY)).toBeNull();
  });
});
