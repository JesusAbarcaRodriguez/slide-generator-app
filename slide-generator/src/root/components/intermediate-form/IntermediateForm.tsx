import { useSlideContext } from "@/context/slide.context";
import { getPrompt, getSubThemes } from "@/root/functions";
import { useState } from "react";
import CheckBoxSchema from "./CheckBoxScheme";
import CardThemeList from "./CardThemeList";
import { motion } from "framer-motion"
export function IntermediateForm() {
    const schemas = [1, 2, 3];
    const { slideContextResponse, store, generateSlide, setSlide, setSlideContextResponse } = useSlideContext();
    const subThemes = getSubThemes(slideContextResponse);
    const [selectedSchemas, setSelectedSchemas] = useState<number[]>(schemas);
    const [selectedSubThemes, setSelectedSubThemes] = useState<string[]>(subThemes);
    const [prompts, setPrompts] = useState<string[]>([])
    const handleSchemaChange = (schema: number) => {
        const isSchemaSelected = selectedSchemas.includes(schema);
        if (isSchemaSelected && selectedSchemas.length > 1) {
            setSelectedSchemas(selectedSchemas.filter((item) => item !== schema));
        } else if (!isSchemaSelected) {
            setSelectedSchemas([...selectedSchemas, schema]);
        }
    };

    const handleClick = async () => {
        const newPrompts = await Promise.all(
            selectedSubThemes.slice(0, store.countSubtheme).map(async (subTheme) => {
                const random = Math.floor(Math.random() * selectedSchemas.length);
                const newPrompt = getPrompt(subTheme, selectedSchemas[random], store);
                await setPrompts(prevPrompts => [...prevPrompts, newPrompt]);
                return newPrompt;
            })
        );
        generateSlide(newPrompts);
    };
    const handleDelete = () => {
        setSlideContextResponse("");
        setSlide([]);
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-4"
        >
            <h2 className="text-white text-center text-3xl font-bold mb-6">Select your preferred subtopics and outline types (bullets, paragraphs, sentences)</h2>
            <div className="flex flex-row justify-center items-center">
                {schemas.map((schema, index) => (
                    <CheckBoxSchema key={index} schema={schema} handleSchemaChange={handleSchemaChange} checked={selectedSchemas.includes(schema)} />
                ))}
            </div>
            <div>
                <h2 className="text-white text-center text-3xl font-bold mb-6">Your Subtopic:</h2>
                <CardThemeList selectedSubThemes={selectedSubThemes} setSelectedSubThemes={setSelectedSubThemes} />
            </div>
            <div className="mt-4 w-1/3 flex justify-between">
                <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleDelete}>Back </button>
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleClick}>Generate Slides</button>
            </div>
        </motion.div>
    );
}