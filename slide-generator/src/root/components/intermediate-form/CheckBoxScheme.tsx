import Image from "next/image";

interface schemaProp {
    schema: number
    handleSchemaChange: (schema: number) => void;
    checked: boolean;
}
export default function CheckBoxSchema({ schema, handleSchemaChange, checked }: schemaProp) {
    return (
        <div className="flex flex-col justify-center  items-center m-4">

            <input
                type="checkbox"
                value=""
                onChange={() => handleSchemaChange(schema)}
                checked={checked}
                className="rounded-lg w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <Image className="mt-2 rounded-lg" src={`/${schema}.jpg`} alt={""} width={100} height={100} />

        </div>
    );
}
