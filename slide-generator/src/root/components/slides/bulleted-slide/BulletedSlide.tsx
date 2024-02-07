import { Bulleted } from "@/root/types";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useState } from "react";
import toast from "react-hot-toast";

interface BulletedSlideProps {
    data: Bulleted;
}

export default function BulletedSlide({ data }: BulletedSlideProps) {
    const handleCopyText = () => {
        const textToCopy = data.subTheme + "\n" + data.items.join("\n");
        navigator.clipboard.writeText(textToCopy);
        toast.success("Slide copy");
    };

    return (
        <div className="sm:h-96  h-full w-full lg:m-4 text-white bg-image rounded-md">
            <div className=" mt-2 flex justify-end"><button className="h-5 w-16 " onClick={handleCopyText}> <FontAwesomeIcon icon={faCopy} className='' /></button></div>
            <div className="flex flex-col justify-center h-full  text-center">
                <h3 className="text-2xl lg:text-4xl font-bold mb-10">{data.subTheme}</h3>
                <div className="h-60 flex justify-center items-center">
                    <div className="text-white text-center">
                        <ul className="list-disc text-start list-inside">
                            {data.items.map((item, index) => (
                                <li className="mb-2 text-base lg:text-lg mx-5 font-medium" key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}
