import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-scroll'

const CallToAction = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-900 text-white body-font">
            <div className=" border-2 h-96 bg-gray-800 mt-10 p-4 rounded-lg border-slate-700 shadow-lg shadow-gray-800 container px-5 py-24 mx-auto">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <h2 className="sm:text-4xl text-white font-bold mb-6">Create Stunning Slideshows Effortlessly!</h2>
                    <p className="text-xs sm:text-xl text-white mb-10">Unlock your creativity with our powerful slideshow generator.</p>
                    <Link to="slidGenerator"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="bg-blue-500 animate-bounce hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg">Get Started Now!</Link>
                </div>
            </div>
        </motion.section>
    )
}

export default CallToAction
