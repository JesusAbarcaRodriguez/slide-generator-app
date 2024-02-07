import { paramsMessage } from "@/schemas";
import { CustomInput } from "../formik";
import { Formik, Form } from 'formik';
import CustomSelect from "../formik/CustomSelect";
import { ItemCounter } from "../formik/ItemCounter";
import { useState } from "react";
import { useSlideContext } from "@/context/slide.context";
import { Parameters, firstPrompt } from "@/root/"
import { options, languages } from '@/root/static-data'
import { motion } from "framer-motion";
interface FormValues {
    theme: string;
    type: string;
    language: string;
}
export default function ParametersForm() {
    const [subThemesNumber, setSubThemesNumber] = useState<number>(10);
    const { setSlideContextPrompt, setStore } = useSlideContext();
    const initialValues: FormValues = { theme:""} as FormValues;
    const onSubmit = (values: FormValues) => {
        const { theme, type, language } = values;
        const newParams = { language, countSubtheme: subThemesNumber, theme, countSlide: subThemesNumber } as Parameters;
        setStore(newParams);
        const prompt = firstPrompt(subThemesNumber, theme, type, language)
        setSlideContextPrompt(prompt);
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center w-full p-4 h-auto"
        >
            <h2 className="text-white text-2xl font-bold mb-4 text-center">Parameters Form</h2>
            <p className="text-white text-center m-4">Add here your title and other parameters to generate your slides</p>
            <Formik initialValues={initialValues} validationSchema={paramsMessage} onSubmit={onSubmit}>
                <Form className="shadow-lg shadow-gray-800 bg-gray-800 border-2 p-4 rounded-lg border-slate-700 flex flex-col justify-center sm:w-2/4">
                    <div className="flex flex-col justify-center items-center">
                        <CustomInput label="Theme:" name="theme" inputType="text" placeholder="Type a subject" />
                        <CustomSelect label="Type" name="type">
                            {options.map((option) => (
                                <option key={option.option} value={option.option}>
                                    {option.option}
                                </option>
                            ))}
                        </CustomSelect>
                        <CustomSelect label="Language" name="language">
                            {languages.map((language) => (
                                <option key={language.language} value={language.language}>
                                    {language.language}
                                </option>
                            ))}
                        </CustomSelect>
                        <div className="flex flex-row m-4">
                            <label className="text-white  mr-2 ">SubThemes:</label>
                            <ItemCounter setCounter={setSubThemesNumber} />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="submit"
                        >
                            Generate subtopic
                        </motion.button>
                    </div>
                </Form>
            </Formik>
        </motion.div>
    );
}