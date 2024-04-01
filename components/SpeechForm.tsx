"use client";
import { voiceAndSpeechCalculate } from "@/utils/Calculate/voiceAndSpeech";
import { getPationDataType } from "@/utils/getPationtDataType";
import { generalChart } from "@/utils/voiceAndSpeedChart";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  speechTest: number;
  voiceTest: number;
};

const SpeechForm = () => {
  const [speech, setspeech] = useState<getPationDataType["speech"] | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const [value, setValue] = useState<number>(0);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const speechValue = voiceAndSpeechCalculate(
      data.voiceTest,
      data.speechTest
    );
    setValue(speechValue);
    setspeech({
      voiceTest: data.voiceTest,
      speechTest: data.speechTest,
      result: speechValue,
    });
  };

  const fields = ["speechTest", "voiceTest"];
  const errorMessages = {
    speechTest: {
      required: "Speech test value is required",
      pattern: "Enter a number between 1 and 7",
      label: "Speech intelligibility test",
    },
    voiceTest: {
      required: "Voice test value is required",
      pattern: "Enter a number between 1 and 7",
      label: "Voice test",
    },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 "
    >
      <h2 className="text-lg uppercase font-semibold">Speech Disability </h2>
      <p className="text-sm flex flex-col">
      <span className="font-bold">
      Definition:</span>
      <span>
       &quot;Speech and language disability&quot; means a permanent
        disability arising out of conditions such as laryngectomy or aphasia
        affecting one or more components of speech and language due to organic
        or neurological causes
      </span>
      </p>
      <div>
        <h3 className="text-lg uppercase font-semibold">
          Conditions affecting Speech Components for which Speech Disability
          certificate can be issued
        </h3>
        <ul className="list-disc px-5 text-sm">
          <li> Laryngectomy </li>
          <li> Glossectomy </li>
          <li> Bilateral vocal cord paralysis </li>
          <li> Maxillofacial anomalies </li>
          <li> Dysarthria </li>
          <li> Apraxia of Speech </li>
        </ul>
      </div>
      {fields.map((field) => (
        <div
          key={field}
          className="flex flex-col gap-2"
        >
          <label
            htmlFor={field}
            className="text-xl font-light "
          >
            {errorMessages[field as keyof Inputs].label}{" "}
          </label>
          <input
            type="number"
            {...register(field as keyof Inputs, {
              required: errorMessages[field as keyof Inputs].required,
              pattern: {
                value: /^[1-7]+$/,
                message: errorMessages[field as keyof Inputs].pattern,
              },
              min: {
                value: 0,
                message: "Value should be at least 0",
              },
              max: {
                value: 7,
                message: "Value should be at most 7",
              },
            })}
            className="w-full p-3 rounded-md border border-gray-500 bg-black text-white"
            placeholder={`Enter ${
              field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")
            }`}
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
      {isSubmitSuccessful && (
        <h3>You have {value.toFixed(2)}% voice disability.</h3>
      )}
      <h3 className="font-semibold">How did we get the score</h3>
      <div className="text-sm text-gray-200 p-3 flex gap-3">
        <div className="flex justify-center items-center">
          Percentage of Speech Disability =
        </div>
        <div className="flex flex-col divide-y-2 w-max">
          <span>
            (2 x Upper range of percentage of SIA) + Upper range of percentage
            of OVCA
          </span>
          <span className="text-center">3</span>
        </div>
      </div>
      {speech && (
        <>
          <p className="text-sm flex flex-col text-gray-200 p-3">
            Step 1:
            <span className="pl-4">
              SIA: {generalChart(speech.speechTest).at(1)}%
              <br />
              OVCA: {generalChart(speech.voiceTest).at(1)}%
            </span>
          </p>
          <p className="text-sm text-gray-200 p-3">
            Step 2 :
            <div className="text-sm text-gray-200 p-3 flex gap-3">
              <div className="flex justify-center items-center">
                Percentage of Speech Disability =
              </div>
              <div className="flex flex-col divide-y-2 w-max">
                <span>
                  (2 x {generalChart(speech.speechTest).at(1)}) +{" "}
                  {generalChart(speech.voiceTest).at(1)}
                </span>
                <span className="text-center">3</span>
              </div>
            </div>
          </p>
        </>
      )}
    </form>
  );
};

export default SpeechForm;
