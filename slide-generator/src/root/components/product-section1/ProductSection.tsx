import React from 'react';
import DesignsCard from './DesignCard';
import { designs } from '@/root/static-data';
import { motion } from 'framer-motion';
export default function ProductSection() {


    return (
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} className="p-6 bg-gray-900 text-white body-font">
            <div className="border-2 p-4 rounded-lg border-slate-700 shadow-lg shadow-gray-800 bg-gray-800 container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-white  font-semibold text-3xl mb-2 sm:mb-0">
                            Create Slide Text that Highlights and Communicates Clearly
                        </h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                            Our innovative slide text creation tool provides you with all the features needed to generate captivating and effective content. With our platform, you can transform your ideas into impactful messages and communicate your key concepts clearly and concisely.
                        </p>
                    </div>
                </div>
                <h2 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-4">Our Designs:</h2>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {designs.map((design, index) => (
                        <DesignsCard key={index} design={design}/>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}