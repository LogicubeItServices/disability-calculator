"use client";
import React from "react";
import StepProgressBarUnit from "./StepProgressBarUnit";
import { usePathname } from "next/navigation";

const StepProgressBar = () => {
  const DataOfSPB = [
    {
      id: 1,
      icon: "/static/SVGs/ear-svgrepo-com.svg",
      name: "HEARING IMPAIRMENT",
      href: "/hearing",
    },
    {
      id: 2,
      icon: "/static/SVGs/voice-svgrepo-com.svg",
      name: "Speech Disability",
      href: "/speech",
    },
    {
      id: 3,
      icon: "/static/SVGs/language-svgrepo-com.svg",
      name: "Language Disability",
      href: "/language",
    },
  ];
  const PathName = usePathname();
  console.log("Path:", PathName);

  return (
    <div className="flex flex-col gap-1 max-md:flex-row max-md:items-center max-md:justify-center">
      {DataOfSPB.map((e, i) => (
        <div key={i} className="">
          <StepProgressBarUnit
            href={e.href}
            icon={e.icon}
            title={e.name}
            progressLineCN={`${e.id === DataOfSPB.length ? "!h-0 !w-0" : ""}`}
            progressIconCN={PathName == e.href ? "invert" : ""}
            progressTitleCN={PathName == e.href ? "!text-white" : ""}
          />
        </div>
      ))}
    </div>
  );
};

export default StepProgressBar;
