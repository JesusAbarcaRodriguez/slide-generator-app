import axios from "axios";
import { useSlideContext } from "./slide.context";

export async function getGPT(prompt1: string): Promise<string> {
    try {
   
        if (prompt1.length < 2) {
            return ""
        }
        const prompt = prompt1;
        const payload = {
            model: "text-davinci-003",
            prompt,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: 400,
            n: 1,
        };
        try {

          
        
            const response = await axios.post("https://api.openai.com/v1/completions", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                },
            })
            const json = response.data.choices[0].text as string;
        
            return json.replace(/\n\n/g, "");
        } catch (error) {
            console.error(error);
            throw error;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};