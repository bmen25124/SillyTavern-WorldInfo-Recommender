import { Message } from 'sillytavern-utils-lib';

/**
 * Consolidates every `system` message in the conversation into a single message
 * placed at the very front, with non-system turns preserved in order afterwards.
 *
 * Several chat completion endpoints (Anthropic Claude, Google Gemini) only honor
 * `system` content placed at the start of the conversation; system messages
 * emitted after user/assistant turns may be silently dropped, which causes
 * format/structure instructions to never reach the model. Pulling all system
 * content together at the front guarantees these endpoints see it.
 *
 * Pure and free of SillyTavern-runtime dependencies so it can be unit tested
 * in isolation.
 */
export function normalizeMessageRoles(messages: Message[]): Message[] {
  const systemParts: string[] = [];
  const rest: Message[] = [];

  for (const m of messages) {
    if (m.role === 'system') {
      systemParts.push(m.content);
    } else {
      rest.push(m);
    }
  }

  const out: Message[] = [];
  if (systemParts.length) {
    out.push({ role: 'system', content: systemParts.join('\n\n') });
  }
  out.push(...rest);
  return out;
}
