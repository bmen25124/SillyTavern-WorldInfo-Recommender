import type { ReviseMessage, ReviseSession } from './revise-types.js';

export const REVISE_SESSIONS_KEY = 'worldInfoRecommender_reviseSessions';

type LocalForageLike = {
  getItem<T>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<T>;
  removeItem(key: string): Promise<void>;
};

type LegacyStorageLike = Pick<Storage, 'getItem' | 'removeItem'>;

export interface ReviseSessionLoadResult {
  sessions: ReviseSession[];
  recovered: boolean;
  error?: unknown;
}

export interface ReviseSessionSaveResult {
  persisted: boolean;
  error?: unknown;
}

export interface ReviseSessionMigrationResult {
  migrated: boolean;
  recovered: boolean;
  error?: unknown;
}

const getStorage = (): LocalForageLike => SillyTavern.libs.localforage as LocalForageLike;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const sanitizeMessage = (value: unknown): ReviseMessage | null => {
  if (!isRecord(value) || typeof value.id !== 'string' || typeof value.role !== 'string') {
    return null;
  }

  return {
    ...value,
    content: typeof value.content === 'string' ? value.content : '',
  } as ReviseMessage;
};

const sanitizeSessions = (value: unknown): { sessions: ReviseSession[]; recovered: boolean } => {
  if (value == null) {
    return { sessions: [], recovered: false };
  }

  if (!Array.isArray(value)) {
    return { sessions: [], recovered: true };
  }

  const sessions = value.map(sanitizeSession).filter((session): session is ReviseSession => session !== null);
  return { sessions, recovered: sessions.length !== value.length };
};

const sanitizeSession = (value: unknown): ReviseSession | null => {
  if (
    !isRecord(value) ||
    typeof value.id !== 'string' ||
    typeof value.name !== 'string' ||
    (value.type !== 'entry' && value.type !== 'global') ||
    typeof value.createdAt !== 'string' ||
    !Array.isArray(value.messages)
  ) {
    return null;
  }

  const messages = value.messages.map(sanitizeMessage).filter((message): message is ReviseMessage => message !== null);

  return {
    ...value,
    messages,
    context: isRecord(value.context)
      ? (value.context as ReviseSession['context'])
      : { mainContextTemplatePreset: 'Default' },
    profileId: typeof value.profileId === 'string' ? value.profileId : '',
  } as ReviseSession;
};

export const parseLegacyReviseSessions = (storedSessions: string | null): ReviseSessionLoadResult => {
  if (!storedSessions) {
    return { sessions: [], recovered: false };
  }

  try {
    const parsed = JSON.parse(storedSessions);
    const { sessions, recovered } = sanitizeSessions(parsed);
    return { sessions, recovered };
  } catch (error) {
    return { sessions: [], recovered: true, error };
  }
};

export const loadReviseSessions = async (storage: LocalForageLike = getStorage()): Promise<ReviseSessionLoadResult> => {
  try {
    const storedSessions = await storage.getItem<unknown>(REVISE_SESSIONS_KEY);
    const { sessions, recovered } = sanitizeSessions(storedSessions);
    if (recovered) {
      await storage.setItem(REVISE_SESSIONS_KEY, sessions);
    }
    return { sessions, recovered };
  } catch (error) {
    return { sessions: [], recovered: true, error };
  }
};

export const saveReviseSessions = async (
  sessions: ReviseSession[],
  storage: LocalForageLike = getStorage(),
): Promise<ReviseSessionSaveResult> => {
  try {
    await storage.setItem(REVISE_SESSIONS_KEY, sessions);
    return { persisted: true };
  } catch (error) {
    return { persisted: false, error };
  }
};

export const migrateReviseSessionsStorage = async (
  storage: LocalForageLike = getStorage(),
  legacyStorage: LegacyStorageLike = localStorage,
): Promise<ReviseSessionMigrationResult> => {
  const legacySessions = legacyStorage.getItem(REVISE_SESSIONS_KEY);
  if (!legacySessions) {
    return { migrated: false, recovered: false };
  }

  const parsed = parseLegacyReviseSessions(legacySessions);
  if (parsed.sessions.length === 0) {
    legacyStorage.removeItem(REVISE_SESSIONS_KEY);
    return { migrated: false, recovered: parsed.recovered, error: parsed.error };
  }

  try {
    const existing = await loadReviseSessions(storage);
    if (existing.sessions.length === 0) {
      await storage.setItem(REVISE_SESSIONS_KEY, parsed.sessions);
    }
    legacyStorage.removeItem(REVISE_SESSIONS_KEY);
    return { migrated: existing.sessions.length === 0, recovered: parsed.recovered || existing.recovered };
  } catch (error) {
    return { migrated: false, recovered: parsed.recovered, error };
  }
};
