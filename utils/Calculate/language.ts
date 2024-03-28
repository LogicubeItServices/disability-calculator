import { langChart } from "../langChart";

export const languageCalculate = (wab: number) => {
  if (wab < 0 || wab > 99) throw new Error("Invalid input");
  let stringWAB = wab.toString();
  if (wab < 10) {
    stringWAB = "0" + stringWAB;
  }

  const ArrayOfWAB = stringWAB.split("");
  const tensWAB = parseInt(ArrayOfWAB[0]);
  const unitWAB = parseInt(ArrayOfWAB.at(-1)!);
  return langChart(unitWAB, tensWAB);
};
