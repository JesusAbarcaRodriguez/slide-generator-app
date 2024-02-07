/* eslint-disable react-hooks/exhaustive-deps */
import { useSlideContext } from "@/context/slide.context";
import BulletedSlide from "../bulleted-slide/BulletedSlide";
import ParagraphColumnsSlide from "../paragraph-colums-slide/ParagraphColumsSlide";
import ParagraphSlide from "../paragraph-slide/ParagraphSlide";
import { useEffect } from "react";
import { Bulleted, ParagraphColumns } from "@/root/types";
import { Paragraph } from "@/root/types";
import { motion } from "framer-motion";
export default function MainSlide() {
    const { slide, setSlideContextResponse, setSlide } = useSlideContext();

    const handleDelete = () => {
        setSlideContextResponse("");
        setSlide([]);
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-screen"
        >
            <h2 className="text-center m-4 text-3xl font-bold text-white">Your generated slides:</h2>
            <div className="border-2 p-2 border-slate-700 h-3/4 mt-10 lg:p-10 overflow-y-scroll grid justify-center items-center grid-cols-1 xl:grid-cols-2 gap-24 lg:mx-9">
                {slide.map((slideItem , index) => {
                    if (slideItem!.type == 1) {
                        const bulleted = slideItem as Bulleted;
                        return <BulletedSlide key={index} data={bulleted}></BulletedSlide>;
                    }
                    if (slideItem!.type == 2) {
                        const paragraphColumns = slideItem as ParagraphColumns;
                        return <ParagraphColumnsSlide key={index} data={paragraphColumns}></ParagraphColumnsSlide>;
                    } else {
                        const paragraph = slideItem as Paragraph;
                        if (slideItem.subTheme.length > 3) {
                            return <ParagraphSlide key={index} data={paragraph}></ParagraphSlide>;
                        }
                    }
                })}
            </div>
            <div className="mt-10 flex justify-center">
                <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleDelete}>Delete Slides</button>
            </div>
        </motion.div>
    );
}