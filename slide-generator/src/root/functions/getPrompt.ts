import { Parameters } from '@/root/types'
export default function getPrompt(subtheme: string, schema: number, theme: Parameters) {

        const promptMap = [
                {
                        "type": 1,
                        "theme": theme.theme,
                        "subTheme": subtheme,
                        "items": ["", "", ""],
                },
                {
                        "type": 2,
                        "theme": theme.theme,
                        "subTheme": subtheme,
                        "description1": "minimo 15 palabras y maximo 16 palabras",
                        "description2": "minimo 15  palabras y maximo 16 palabras",
                },
                {
                        "type": 3,
                        "theme": theme.theme,
                        "subTheme": subtheme,
                        "description": "minimo 20 palabras y maximo 30",
                },
        ];
        const prompt = promptMap[schema - 1];
        const promptText = JSON.stringify(prompt);
        return `Do not interact with me, only fill in the missing parts in the ${theme.language} language, give me only a complete JSON, don't forget to close the JSON ${promptText}`;
}