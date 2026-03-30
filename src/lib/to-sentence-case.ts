export function toSentenceCase(value: string) {
  return value.replace(/(^\s*\p{L}|[.!?]\s+\p{L})/gu, (match) => match.toUpperCase());
}
