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
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>();
    const [value, setValue] = useState<number>(0);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const speechValue = voiceAndSpeechCalculate(data.voiceTest, data.speechTest);
        setValue(speechValue);
        reset()
    };

    const fields = ["speechTest", "voiceTest"];
    const errorMessages = {
        speechTest: {
            required: "Speech test value is required",
            pattern: "Enter a number between 1 and 7",
        },
        voiceTest: {
            required: "Voice test value is required",
            pattern: "Enter a number between 1 and 7",
        },
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            {fields.map((field) => (
                <div key={field}>
                    <label htmlFor={field} className="text-xl font-medium ">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} Score</label>
                    <input
                        type="number"
                        {...register(field as keyof Inputs, {
                            required: errorMessages[field as keyof Inputs].required,
                            pattern: {
                                value: /^[1-7]+$/,
                                message: errorMessages[field as keyof Inputs].pattern,
                            },
                            min: {
                                value: 1,
                                message: "Value should be at least 0",
                            },
                            max: {
                                value: 7,
                                message: "Value should be at most 7",
                            },
                        })}
                        className="w-full p-3 rounded-md border border-black"
                        placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}`}
                    />
                    {errors?.[field as keyof Inputs] && (
                        <span className="text-red-500 text-xs">{errors[field as keyof Inputs]?.message}</span>
                    )}
                </div>
            ))}
            <button className="p-3 rounded-md border border-black w-fit px-10 hover:bg-black transition duration-700 hover:text-white font-medium text-lg" type="submit" >Continue</button>
            {isSubmitSuccessful && <h3>You have {value.toFixed(2)}% voice disability.</h3>}
        </form>
    );
};

export default SpeechForm;
