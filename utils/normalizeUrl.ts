export default function normalizeUrl (url: string): string {
    if(url.startsWith('http://') || url.startsWith('https://')) {
        return url
    } else {
        return `https://${url}`
    }
}