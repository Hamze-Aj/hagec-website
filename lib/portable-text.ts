/** Minimal portable text → plain paragraphs (no extra deps). */
export function blocksToParagraphs(blocks: unknown): string[] {
  if (!blocks) return [];
  if (typeof blocks === "string") return [blocks];
  if (!Array.isArray(blocks)) return [];
  const out: string[] = [];
  for (const block of blocks as { _type?: string; children?: { text?: string }[] }[]) {
    if (!block || block._type !== "block" || !Array.isArray(block.children)) continue;
    const text = block.children.map((c) => c?.text ?? "").join("");
    if (text.trim()) out.push(text.trim());
  }
  return out;
}
