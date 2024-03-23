import {hearingChart} from "@/utils/hearingChart";


export const hearingCalculate = (leftEar: number, rightEar: number) => {
    const betterEar = Math.min(leftEar, rightEar)
    const worseEar = Math.max(leftEar, rightEar)

    const betterEarValue = hearingChart(betterEar) * 5
    const worseEarValue = hearingChart(worseEar)
    return (betterEarValue + worseEarValue)/6
}

