"use client"
import { voiceAndSpeechCalculate } from "@/utils/Calculate/voiceAndSpeech";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    speechTest: number;
    voiceTest: number;
};

const SpeechForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitted },
    } = useForm<Inputs>();
    const [value, setvalue] = useState(0)
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const speechValue = voiceAndSpeechCalculate(data.voiceTest, data.speechTest)
        setvalue(speechValue)
    };

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
            {isSubmitted && <h3>You have {value.toFixed(2)}% voice disability.</h3>}
        </form>
    );
};

export default SpeechForm;
