"use client"
import { languageCalculate } from "@/utils/Calculate/language";
import { getPationDataType } from "@/utils/getPationtDataType";
import { langChart } from "@/utils/langChart";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    wabScore: number;
};

const LanguageForm = () => {
    const [language, setlanguage] = useState<getPationDataType['language'] | null>(null)

  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>();
    const [value, setValue] = useState<number>(0);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const languageValue = languageCalculate(data.wabScore);
        setValue(languageValue);
        setlanguage({ wabScore: data.wabScore, result: languageValue });
    };
const table = () => {
    const elements:React.JSX.Element[][]= []
    for (let i = 0; i < 10; i++) {
        const row:React.JSX.Element[] = []
        for (let j = 0; j < 10; j++) {
            row.push(<div key={i*10+j} className={`p-5 w-full flex  justify-between items-center ${language?.wabScore.toString() == `${j}${i}` && "text-red-600"} `}>{languageCalculate(parseInt(`${j}${i}`))}</div>)
        }
        elements.push(row)
    }
    return elements
}
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
            <h2 className="text-3xl font-semibold">Language</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor='wabScore' className="text-xl font-light ">WAB Score</label>
                <input
                    type="number"
                    {...register('wabScore', {
                        required: "Speech test value is required",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Enter a number between 1 and 99",
                        },
                        maxLength: {
                            value: 2,
                            message: "Enter a number between 1 and 99",
                        },
                        min: {
                            value: -1,
                            message: "Value should be at least 0",
                        },
                        max: {
                            value: 99,
                            message: "Value should be at most 99",
                        },
                    })}
                    className="w-full p-3 rounded-md border border-gray-500 bg-black"
                    placeholder={`Enter your WAB score`}
                />
            </div>
            {errors?.["wabScore"] && (
                <span className="text-red-500 text-xs">{errors["wabScore"]?.message}</span>
            )}
            <button className="p-3 rounded-md border border-black w-fit px-10 hover:bg-black transition duration-700 hover:text-white font-medium text-lg" type="submit" >Submit</button>
            {isSubmitSuccessful &&<h3>You have {value.toFixed(2)}% language disability.</h3> }
<div className="text-center">
    Number in Units Place in WAB Score
</div>
<div className="grid grid-cols-12">
 <div className="verticalText flex justify-center items-center">
Number in Tens Place in WAB Score
 </div>
 <div className="border-r justify-between items-center flex flex-col">
    {[<div className="p-5" key={10}/>,0,1,2,3,4,5,6,7,8,9].map(e => (
        <div key={e.toString()} className="p-5 ">{e}</div>
    ))}
 </div>
 {
   table().map((e,i) => (
        <div key={i} className=" justify-between items-center flex flex-col">
          <div className="p-5  w-full flex  justify-between items-center  border-b">
          {i}
            </div>
            {e}
        </div>
    ))
   }
</div>

        </form>
    );
};

export default LanguageForm;
