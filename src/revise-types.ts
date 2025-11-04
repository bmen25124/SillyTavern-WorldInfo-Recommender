import { z } from 'zod';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { PromptEngineeringMode } from './settings.js';
import { Message } from 'sillytavern-utils-lib';

export const REVISE_SCHEMA_NAME = {
  ENTRY: 'EntryRevision',
  GLOBAL: 'GlobalRevision',
} as const;

export const CHAT_HISTORY_PLACEHOLDER_ID = 'placeholder-chatHistory';

// Schema for a single entry revision
export const EntryRevisionResponseSchema = z.object({
  justification: z.string().describe('A brief, friendly explanation of the changes made.'),
  name: z.string().describe("The entry's new name/comment."),
  triggers: z.array(z.string()).describe("The entry's new keywords/triggers."),
  content: z.string().describe("The entry's new content."),
});
export type EntryRevisionResponse = z.infer<typeof EntryRevisionResponseSchema>;

// Schemas for global revision operations, grouped by type. This is easier for LLMs
// to generate correctly than a discriminated union or a single flat list.

const GlobalOpAddSchema = z.object({
  worldName: z.string().describe('The name of the world where the new entry should be added.'),
  name: z.string().describe("The new entry's name/comment."),
  triggers: z.array(z.string()).describe("The new entry's triggers."),
  content: z.string().describe("The new entry's content."),
});

const GlobalOpChangeSchema = z.object({
  worldName: z.string().describe('The name of the world containing the entry to change.'),
  originalName: z.string().describe('The original name/comment of the entry to change, used for identification.'),
  newName: z.string().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: z.array(z.string()).optional().describe("The entry's new list of triggers."),
  content: z.string().optional().describe("The entry's new content."),
});

const GlobalOpRemoveSchema = z.object({
  worldName: z.string().describe('The name of the world containing the entry to remove.'),
  name: z.string().describe('The name/comment of the entry to remove.'),
});

export const GlobalRevisionResponseSchema = z.object({
  justification: z.string().describe('A brief, friendly explanation of all the operations performed.'),
  add: z.array(GlobalOpAddSchema).optional().describe('A list of new entries to add.'),
  change: z.array(GlobalOpChangeSchema).optional().describe('A list of existing entries to change.'),
  remove: z.array(GlobalOpRemoveSchema).optional().describe('A list of existing entries to remove.'),
});
export type GlobalRevisionResponse = z.infer<typeof GlobalRevisionResponseSchema>;

// The "state" for a revise session can be a single entry or the whole list
export type ReviseState = WIEntry | Record<string, WIEntry[]>;
export type ReviseSessionType = 'entry' | 'global';

export interface ReviseMessage extends Message {
  id: string;
  isInitial?: boolean;
  stateSnapshot?: ReviseState;
}

export interface ReviseSession {
  id: string;
  name: string;
  type: ReviseSessionType;
  // For 'entry' type sessions
  targetEntryIdentifier?: string;
  worldName?: string;
  createdAt: string;
  messages: ReviseMessage[];
  context: {
    mainContextTemplatePreset: string;
  };
  profileId: string;
  promptEngineeringMode: PromptEngineeringMode;
}
