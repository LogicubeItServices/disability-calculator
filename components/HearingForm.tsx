"use client";
import {
  getBetterEar,
  getBetterEarValue,
  getWorseEar,
  getWorseEarValue,
  hearingCalculate,
} from "@/utils/Calculate/hearing";
import { getPationDataType } from "@/utils/getPationtDataType";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  leftEar: number;
  rightEar: number;
};

const HearingForm = () => {
  const [patientData, setPatientData] = useState<
    getPationDataType["hearing"] | null
  >(null);

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
    setPatientData({
      leftear: data.leftEar,
      rightear: data.rightEar,
      result: earValue,
    });
    localStorage.setItem(
      "patientData",
      JSON.stringify({
        hearing: {
          leftear: data.leftEar,
          rightear: data.rightEar,
          result: earValue,
        },
      })
    );
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5   "
    >
      <h2 className="text-xl font-semibold">
        HEARING IMPAIRMENT (DEAF AND HARD OF HEARING)
      </h2>
      <div className="font-light">
        <span className="font-semibold">Definition:</span>
        <ul className="flex flex-col">
          <li>
            (a) &quot;Deaf&quot; means persons having 70 DB hearing loss in
            speech frequencies in both ears;
          </li>
          <li>
            (b) &quot;Hard of hearing&quot; means person having 60 DB to 70 DB
            hearing loss in speech frequencies in both ears;
          </li>
        </ul>
      </div>
      {fields.map((field) => (
        <div
          key={field}
          className="flex flex-col gap-2"
        >
          <label
            htmlFor={field}
            className="text-lg font-light "
          >
            {field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")}{" "}
            Monaural PTA in dB
          </label>
          <input
            type="number"
            {...register(field as keyof Inputs, {
              required: errorMessages[field as keyof Inputs].required,
              pattern: {
                value: /^[0-9]+$/,
                message: errorMessages[field as keyof Inputs].pattern,
              },
              min: {
                value: -1,
                message: "Value should be at least 0",
              },
              max: {
                value: 95,
                message: "Value should be at most 95",
              },
            })}
            className="w-full p-3 rounded-md border border-gray-500 bg-black"
            placeholder={`Enter ${
              field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")
            } score`}
          />
          {errors?.[field as keyof Inputs] && (
            <span className="text-red-500 text-xs">
              {errors[field as keyof Inputs]?.message}
            </span>
          )}
        </div>
      ))}
      <button
        className="p-3 rounded-md border border-gray-500 w-fit px-10 hover:bg-white transition duration-700 hover:text-black font-medium text-lg"
        type="submit"
      >
        Submit
      </button>
      {isSubmitSuccessful ? (
        <h3>You have {value.toFixed(2)}% hearing impairment.</h3>
      ) : null}
      <div className="flex flex-col gap-5 divide-y-2">
        <h3 className="font-semibold">How did we get the score</h3>
        <div className="text-sm text-gray-200 p-3 flex gap-3">
        <div className="flex justify-center items-center">
          Percentage of Hearing impairment =
        </div>
          <div className="flex flex-col divide-y-2 w-max">
            <span>
              ((Better ear % of hearing disability x 5) + ( Poorer ear % of
              hearing disability))
            </span>
            <span className="text-center">6</span>
          </div>
        </div>
        {patientData && (
          <>
            <p className="text-sm flex flex-col text-gray-200 p-3">
              Step 1:
              <span className="pl-4">
                Better Ear :{" "}
                {getBetterEarValue(
                  getBetterEar(patientData?.leftear, patientData?.rightear)
                )}
                %
                {" - "} {patientData?.leftear > patientData?.rightear?"Right Ear":"Left Ear"}
                <br />
                Poor Ear :{" "}
                {getWorseEarValue(
                  getWorseEar(patientData?.leftear, patientData?.rightear)
                  )}
                %
                {" - "}   {patientData?.leftear < patientData?.rightear?"Right Ear":"Left Ear"}
              </span>
            </p>
            <p className="text-sm text-gray-200 p-3">
              Step 2 :
              <div className="flex gap-2">
                <div className="flex flex-col divide-y-2 w-max">
                <span>
                  ((
                  {getBetterEarValue(
                    getBetterEar(patientData?.leftear, patientData?.rightear)
                  )}{" "}
                  x 5) + (
                  {getWorseEarValue(
                    getWorseEar(patientData?.leftear, patientData?.rightear)
                  )}
                  ))
                </span>
                <span className="text-center">6</span>
                </div>
              <div className="h-full flex justify-center items-center ">
                = { patientData.result}%
              </div>
              </div>
            </p>
          </>
        )}
      </div>
    </form>
  );
};

export default HearingForm;
