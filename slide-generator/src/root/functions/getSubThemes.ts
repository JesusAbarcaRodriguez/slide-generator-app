
export default function getSubThemes(text: string): string[] {
    const subThemes = text.split("&");
    return subThemes;
}