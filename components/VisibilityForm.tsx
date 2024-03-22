"use client"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    number: number
}

const VisibilityForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <input type="number" {...register("number", { required: true, pattern: /^[0-9]+$/ })} className="w-full p-3 rounded-md border border-black" placeholder="Enter a number" />
            {errors.number && errors.number.type === "required" && (
                <span>This field is required</span>
            )}
            {errors.number && errors.number.type === "pattern" && (
                <span>Only numbers are allowed</span>
            )}
            <input className="p-3 rounded-md border border-black w-fit" type="submit" />
        </form>
    )
}

export default VisibilityForm
