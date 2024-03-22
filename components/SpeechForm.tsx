"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    speechTest: number;
    voiceTest: number;
};

const SpeechForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    const fields = ["speechTest", "voiceTest"];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            {fields.map((field) => (
                <div key={field}>
                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}</label>
                    <input
                        type="number"
                        {...register(field as keyof Inputs, {
                            required: true,
                            pattern: /^[0-9]+$/,
                        })}
                        className="w-full p-3 rounded-md border border-black"
                        placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}`}
                    />
                    {errors?.[field as keyof Inputs]?.type === "required" && (
                        <span>This field is required</span>
                    )}
                    {errors?.[field as keyof Inputs]?.type === "pattern" && (
                        <span>Only numbers are allowed</span>
                    )}
                </div>
            ))}
            <input className="p-3 rounded-md border border-black w-fit" type="submit" />
        </form>
    );
};

export default SpeechForm;
