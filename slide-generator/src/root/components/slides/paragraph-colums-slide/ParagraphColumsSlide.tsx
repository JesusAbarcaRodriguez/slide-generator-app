import { ParagraphColumns } from "@/root/types";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";

interface ParagraphColumnsSlideProps {
    data: ParagraphColumns;
}
export default function ParagraphColumnsSlide({ data }: ParagraphColumnsSlideProps) {
    const handleCopyText = () => {
        const textToCopy = data.subTheme + "\n" + data.description1 + "\n" + data.description2;
        navigator.clipboard.writeText(textToCopy);
        toast.success("Slide copy");
    };
    return (
        <div className=" sm:h-96 h-auto w-full lg:m-4 text-white bg-image3 rounded-md">
            <div className="m-4 flex justify-end"><button className="h-5 w-16 " onClick={handleCopyText}> <FontAwesomeIcon icon={faCopy} className='' /></button></div>
            <h3 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-10">{data.subTheme}</h3>
            <div className=" flex justify-center h-auto items-center text-center">
                <div className="flex justify-center text-justify min-h-64  h-auto p-4 mt-4">
                    <div className="w-1/2">
                        <p className="text-sm lg:text-lg mx-5 font-medium">{data.description1}</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-sm lg:text-lg mx-5 sm:text-sm  font-medium">{data.description2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}