
export default function firstPrompt(subThemesNumber: number, theme:string, type:string, language:string){
    return  "I need exactly " + (subThemesNumber+5) + " subthemes on " + theme.toUpperCase() + " of type " + type.toUpperCase() + " in language " + language + ", neither in list nor enumerate, only the subtopics must be separated by &, without introduction or conclusion, DO NOT LIST, without a message at the beginning. I don't want the answer in list format. I don't want them to come out accompanied by numbers at the beginning."
}