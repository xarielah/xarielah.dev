/**
 * Normalize any URL that has no http / https prefix.
 *
 * Example: example.com - https://example.com
 * @param {string} url A URL
 * @returns {string} string
 */

export default function normalizeUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  } else {
    return `https://${url}`;
  }
}
