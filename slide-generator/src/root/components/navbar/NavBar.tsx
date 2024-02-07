import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from "next/image";
import LinkReact from 'next/link';
export default function NavBar() {

    return (

        <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <LinkReact href="/" className="flex items-center h-16">
                    <Image width={100} height={100} src="/icon2.png" className="h-10 w-10 mr-3" alt="Flowbite Logo" />
                    <span className="self-center  text-xs sm:text-2xl font-semibold whitespace-nowrap text-white">
                        Slide-Generator
                    </span>
                </LinkReact>
                <div className="flex md:order-2 ">
                    <Link
                        to="slidGenerator"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Generate Slides now!
                    </Link>
                </div>
            </div>
        </motion.nav>

    );
}
