import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { formsClasses } from "./formsClasses";


type InputType = "text" | "number" | "password" | "email" | "date" | "time" | "file" | "radio" | "searchTerm" | "submit";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputType: InputType;

}

const CustomInput: React.FC<CustomInputProps> = ({ label, inputType, ...inputProps }) => {
    const [field, meta] = useField<string>(inputProps.name || "");
    const inputClassName = classNames(formsClasses, {
        "": meta.touched && meta.error ? "" : "",
    });
    return (
        <>
            <div className="mb-2 flex flex-col items-start w-full">
                <label className="text-white font-bold text-start ">{label}</label>
                <div className="relative flex items-center w-full">
                    <input {...field} {...inputProps} type={inputType} className={inputClassName} />
                </div>
                {meta.touched && meta.error && (
                    <div className="w-full rounded-lg p-5">
                        <p className="text-red-500">{meta.error}</p>
                    </div>
                )}
            </div>
        </>
    );
};
export default CustomInput;
