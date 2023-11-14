// markdown.ts

/**
 * Converts a newline-separated string into a Markdown unordered list.
 * 
 * @param text The text to be converted.
 * @returns The converted Markdown unordered list string.
 */
export function toUnorderedList(text: string): string {
    return text.split('\n').map(line => `- ${line}`).join('\n');
}
