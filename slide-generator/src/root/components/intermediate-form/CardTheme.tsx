
interface subThemeProp {
    subTheme: string;
    handleSubThemeChange(subTheme: string, index: number ):void
    index: number;
}
export default function CardTheme({ subTheme, handleSubThemeChange, index }: subThemeProp) {
    return (
        <div className="w-full h-full p-4">
        <div className=" border-purple-700 flex flex-col justify-center items-center border-4 border-purple-700- p-6 rounded-lg bg-gray-800 h-full">
            <h2 className="text-lg text-white font-medium title-font mb-2 text-center">{subTheme}</h2>
            <div className="flex justify-center mt-4">
                <button onClick={() => handleSubThemeChange(subTheme, index)} className=" bg-gray-700 hover:bg-blue-500  border-2 border-slate-700 text-white font-bold py-2 px-4 rounded">
                    Delete subtopic
                </button>
            </div>
        </div>
    </div>
    );

}