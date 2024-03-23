import {generalChart} from "@/utils/voiceAndSpeedChart";

export const voiceAndSpeechCalculate = (voice: number, speech: number) => {
    const SIA = generalChart(voice).at(1)
    const OVCA = generalChart(speech).at(1)
    if (!SIA || !OVCA) throw new Error("Invalid input");
    const SIAValue = SIA * 2
    return (SIAValue + OVCA)/3
}