import { Paragraph } from "@/root/types";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";

interface ParagraphSlideProps {
    data: Paragraph
}
export default function ParagraphSlide({ data }: ParagraphSlideProps) {
    const handleCopyText = () => {
        const textToCopy = data.subTheme + "\n" + data.description;
        navigator.clipboard.writeText(textToCopy);
        toast.success("Slide copy");
    };
    return (
        <div className="sm:h-96 h-full w-full lg:m-4 text-white bg-image2 rounded-md ">
            <div className="m-4 flex justify-end"><button className="h-5 w-16 " onClick={handleCopyText}> <FontAwesomeIcon icon={faCopy} className='' /></button></div>
            <div className="flex justify-center items-center text-center">
                <div className="text-white bg-Transparent min-h-60 h-auto text-center">
                    <h3 className="text-2xl lg:text-4xl font-bold mb-10">{data.subTheme} </h3>
                    <p className="text-sm h-auto lg:text-base mx-5 font-medium text-justify">{data.description? data.description: "no hay nada" }</p>
                </div>
            </div>
        </div>
    );

}
