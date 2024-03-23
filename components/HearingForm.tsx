"use client"
import { hearingCalculate } from "@/utils/Calculate/hearing";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    leftEar: number;
    rightEar: number;
};

const HearingForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>();
    const [value, setValue] = useState<number>(0);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const earValue = hearingCalculate(data.leftEar, data.rightEar);
        setValue(earValue);
        reset();
    };

    const fields = ["leftEar", "rightEar"];
    const errorMessages = {
        leftEar: {
            required: "Left ear value is required",
            pattern: "Enter a number between 0 and 95",
        },
        rightEar: {
            required: "Right ear value is required",
            pattern: "Enter a number between 0 and 95",
        },
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5  ">
            <h2 className="text-3xl font-semibold">Hearing</h2>
            {fields.map((field) => (
                <div key={field} className="flex flex-col gap-2">
                    <label htmlFor={field} className="text-xl font-light ">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} Score</label>
                    <input
                        defaultValue={""}
                        type="number"
                        {...register(field as keyof Inputs, {
                            required: errorMessages[field as keyof Inputs].required,
                            pattern: {
                                value: /^[0-9]+$/,
                                message: errorMessages[field as keyof Inputs].pattern,
                            },
                            min: {
                                value: 0,
                                message: "Value should be at least 0",
                            },
                            max: {
                                value: 95,
                                message: "Value should be at most 95",
                            },
                        })}
                        className="w-full p-3 rounded-md border border-gray-500 bg-black"
                        placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} score`}
                    />
                    {errors?.[field as keyof Inputs] && (
                        <span className="text-red-500 text-xs">{errors[field as keyof Inputs]?.message}</span>
                    )}
                </div>
            ))}
            <button className="p-3 rounded-md border border-gray-500 w-fit px-10 hover:bg-white transition duration-700 hover:text-black font-medium text-lg" type="submit" >Continue</button>
            {isSubmitSuccessful && <h3>You have {value.toFixed(2)}% hearing disability.</h3>}
        </form>
    );
};

export default HearingForm;
