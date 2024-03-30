import {hearingChart} from "@/utils/hearingChart";

export const getBetterEar = (leftEar: number, rightEar: number) =>  Math.min(leftEar, rightEar)
export const getWorseEar = (leftEar: number, rightEar: number) => Math.max(leftEar, rightEar)
export const getBetterEarValue = (betterEar: number) => hearingChart(betterEar)
export const getWorseEarValue = (worseEar: number) => hearingChart(worseEar)

export const hearingCalculate = (leftEar: number, rightEar: number) => {
    const betterEar =getBetterEar(leftEar, rightEar)
    const worseEar = getWorseEar(leftEar, rightEar)

    const betterEarValue = getBetterEarValue(betterEar)*5
    const worseEarValue = getWorseEarValue(worseEar)
    return (betterEarValue + worseEarValue)/6
}
// 
