import type { Session } from './generate.js';

const SESSION_KEY_PREFIX = 'worldInfoRecommend_';

type LocalForageLike = {
  getItem<T>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<T>;
  removeItem(key: string): Promise<void>;
};

type LegacyStorageLike = Pick<Storage, 'getItem' | 'removeItem'>;

export interface MainSessionLoadResult {
  session: Partial<Session>;
  migrated: boolean;
  recovered: boolean;
  error?: unknown;
}

export interface MainSessionSaveResult {
  persisted: boolean;
  error?: unknown;
}

const getStorage = (): LocalForageLike => SillyTavern.libs.localforage as LocalForageLike;

export const getMainSessionKey = (avatarKey: string): string => `${SESSION_KEY_PREFIX}${avatarKey}`;

const parseLegacySession = (rawValue: string | null): MainSessionLoadResult => {
  if (!rawValue) {
    return { session: {}, migrated: false, recovered: false };
  }

  try {
    return { session: JSON.parse(rawValue) as Partial<Session>, migrated: false, recovered: false };
  } catch (error) {
    return { session: {}, migrated: false, recovered: true, error };
  }
};

export const loadMainSession = async (
  avatarKey: string,
  storage: LocalForageLike = getStorage(),
  legacyStorage: LegacyStorageLike = localStorage,
): Promise<MainSessionLoadResult> => {
  const key = getMainSessionKey(avatarKey);

  try {
    const storedSession = await storage.getItem<Partial<Session>>(key);
    if (storedSession) {
      return { session: storedSession, migrated: false, recovered: false };
    }

    const legacy = parseLegacySession(legacyStorage.getItem(key));
    if (Object.keys(legacy.session).length === 0) {
      if (legacy.recovered) {
        legacyStorage.removeItem(key);
      }
      return legacy;
    }

    await storage.setItem(key, legacy.session);
    legacyStorage.removeItem(key);
    return { session: legacy.session, migrated: true, recovered: legacy.recovered };
  } catch (error) {
    return { session: {}, migrated: false, recovered: true, error };
  }
};

export const saveMainSession = async (
  avatarKey: string,
  session: Session,
  storage: LocalForageLike = getStorage(),
): Promise<MainSessionSaveResult> => {
  try {
    await storage.setItem(getMainSessionKey(avatarKey), session);
    return { persisted: true };
  } catch (error) {
    return { persisted: false, error };
  }
};
