import { useField } from "formik";
import React, { SelectHTMLAttributes } from "react";
import classNames from "classnames";
import { formsClassesCustomSelect } from "./formsClasses";
interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, ...selectProps }) => {
    const [field, meta] = useField<string>(selectProps.name || "");
    const selectClassName = classNames(formsClassesCustomSelect, {
        "input-error": meta.touched && meta.error ? "" : "",
    });
    return (
        <>
            <div className="mb-4 w-full">
                <label htmlFor={field.name} className="text-white font-bold">
                    {label}
                </label>
                <select {...field} {...selectProps} className={selectClassName} placeholder={selectProps.placeholder} />
                {meta.touched && meta.error && <div className="border-red-600  text-red-500">{meta.error}</div>}
            </div>
        </>
    );
};

export default CustomSelect;
