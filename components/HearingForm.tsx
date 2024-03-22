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
        formState: { errors,isSubmitted },
    } = useForm<Inputs>();
    const [value, setvalue] = useState<number>(0)
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const earValue = hearingCalculate(data.leftEar,data.rightEar)
        setvalue(earValue)
        reset()
    };

    const fields = ["leftEar", "rightEar"];

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
                        <span className="text-red-500 text-xs">This field is required</span>
                    )}
                    {errors?.[field as keyof Inputs]?.type === "pattern" && (
                        <span className="text-red-500 text-xs">Only numbers are allowed</span>
                    )}
                </div>
            ))}
            <input className="p-3 rounded-md border border-black w-fit" type="submit" />
            {isSubmitted && <h3>You have {value}% hearing disability.</h3>}
        </form>
    );
};

export default HearingForm;
