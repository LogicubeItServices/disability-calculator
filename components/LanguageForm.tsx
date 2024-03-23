"use client"
import { useDisabilityContext } from "@/context/DisabilityContext";
import { languageCalculate } from "@/utils/Calculate/language";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    wabScore: number;
};

const LanguageForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>();
    const [value, setValue] = useState<number>(0);

    const Data = useDisabilityContext()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const languageValue = languageCalculate(data.wabScore);
        setValue(languageValue);
        Data.setDisabilityTestDetails({
            languageTest: languageValue
        })
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <div>
                <label htmlFor='wabScore' className="text-xl font-medium ">WAB Score</label>
                <input
                    defaultValue={""}
                    type="number"
                    {...register('wabScore', {
                        required: "Speech test value is required",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Enter a number between 1 and 99",
                        },
                        min: {
                            value: 0,
                            message: "Value should be at least 0",
                        },
                        max: {
                            value: 99,
                            message: "Value should be at most 99",
                        },
                    })}
                    className="w-full p-3 rounded-md border border-black"
                    placeholder={`Enter your WAB score`}
                />
            </div>
            {errors?.["wabScore"] && (
                <span className="text-red-500 text-xs">{errors["wabScore"]?.message}</span>
            )}
            <button className="p-3 rounded-md border border-black w-fit px-10 hover:bg-black transition duration-700 hover:text-white font-medium text-lg" type="submit" >Continue</button>
            {isSubmitSuccessful && <h3>You have {value.toFixed(2)}% language disability.</h3>}
        </form>
    );
};

export default LanguageForm;
