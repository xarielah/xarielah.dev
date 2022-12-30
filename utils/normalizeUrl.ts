export default function normalizeUrl(url: string): string {
  // This helps if a homepage on a Repository has a link without prefix.
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  } else {
    return `https://${url}`;
  }
}
