import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

export interface ExtendedWIEntry extends WIEntry {
  constant?: boolean;
  vectorized?: boolean;
  position?: number;
  depth?: number | null;
  roleAtDepth?: number | null;
  order?: number;
}

export interface SaveEntryPayload {
  entry: ExtendedWIEntry;
  originalUid: number;
}

export const POSITION_OPTIONS = [
  { label: 'Before character', value: 0 },
  { label: 'After character', value: 1 },
  { label: "Author's Note (top)", value: 2 },
  { label: "Author's Note (bottom)", value: 3 },
  { label: 'At depth (in chat)', value: 4 },
  { label: 'Examples (top)', value: 5 },
  { label: 'Examples (bottom)', value: 6 },
] as const;

export const ROLE_AT_DEPTH = [
  { label: 'System', value: 0 },
  { label: 'User', value: 1 },
  { label: 'Assistant', value: 2 },
] as const;

export type PositionOption = (typeof POSITION_OPTIONS)[number];
export type RoleAtDepthOption = (typeof ROLE_AT_DEPTH)[number];

