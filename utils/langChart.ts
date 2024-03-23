const langChart = (unitWAB: number, tensWAB: number) => {
  if (unitWAB === 0 && tensWAB === 0) return 100;
  if (unitWAB === 0 && tensWAB === 1) return 89.3;
  if (unitWAB === 0 && tensWAB === 2) return 78.6;
  if (unitWAB === 0 && tensWAB === 3) return 68.0;
  if (unitWAB === 0 && tensWAB === 4) return 57.3;
  if (unitWAB === 0 && tensWAB === 5) return 46.6;
  if (unitWAB === 0 && tensWAB === 6) return 36.0;
  if (unitWAB === 0 && tensWAB === 7) return 25.3;
  if (unitWAB === 0 && tensWAB === 8) return 14.7;
  if (unitWAB === 0 && tensWAB === 9) return 4.0;

  if (unitWAB === 1 && tensWAB === 0) return 98.9;
  if (unitWAB === 1 && tensWAB === 1) return 88.2;
  if (unitWAB === 1 && tensWAB === 2) return 77.6;
  if (unitWAB === 1 && tensWAB === 3) return 66.9;
  if (unitWAB === 1 && tensWAB === 4) return 56.2;
  if (unitWAB === 1 && tensWAB === 5) return 45.6;
  if (unitWAB === 1 && tensWAB === 6) return 34.9;
  if (unitWAB === 1 && tensWAB === 7) return 24.3;
  if (unitWAB === 1 && tensWAB === 8) return 13.6;
  if (unitWAB === 1 && tensWAB === 9) return 2.9;

  if (unitWAB === 2 && tensWAB === 0) return 97.8;
  if (unitWAB === 2 && tensWAB === 1) return 87.2;
  if (unitWAB === 2 && tensWAB === 2) return 76.5;
  if (unitWAB === 2 && tensWAB === 3) return 65.8;
  if (unitWAB === 2 && tensWAB === 4) return 55.2;
  if (unitWAB === 2 && tensWAB === 5) return 44.5;
  if (unitWAB === 2 && tensWAB === 6) return 33.9;
  if (unitWAB === 2 && tensWAB === 7) return 23.2;
  if (unitWAB === 2 && tensWAB === 8) return 12.5;
  if (unitWAB === 2 && tensWAB === 9) return 1.9;

  if (unitWAB === 3 && tensWAB === 0) return 96.8;
  if (unitWAB === 3 && tensWAB === 1) return 86.1;
  if (unitWAB === 3 && tensWAB === 2) return 75.4;
  if (unitWAB === 3 && tensWAB === 3) return 64.8;
  if (unitWAB === 3 && tensWAB === 4) return 54.1;
  if (unitWAB === 3 && tensWAB === 5) return 43.4;
  if (unitWAB === 3 && tensWAB === 6) return 32.9;
  if (unitWAB === 3 && tensWAB === 7) return 22.1;
  if (unitWAB === 3 && tensWAB === 8) return 11.5;
  if (unitWAB === 3 && tensWAB === 9) return 0.8;

  if (unitWAB === 4 && tensWAB === 0) return 95.7;
  if (unitWAB === 4 && tensWAB === 1) return 85.0;
  if (unitWAB === 4 && tensWAB === 2) return 74.4;
  if (unitWAB === 4 && tensWAB === 3) return 63.7;
  if (unitWAB === 4 && tensWAB === 4) return 53.0;
  if (unitWAB === 4 && tensWAB === 5) return 42.4;
  if (unitWAB === 4 && tensWAB === 6) return 31.7;
  if (unitWAB === 4 && tensWAB === 7) return 21.1;
  if (unitWAB === 4 && tensWAB === 8) return 10.4;
  if (unitWAB === 4 && tensWAB === 9) return 0.0;

  if (unitWAB === 5 && tensWAB === 0) return 94.6;
  if (unitWAB === 5 && tensWAB === 1) return 84.0;
  if (unitWAB === 5 && tensWAB === 2) return 73.3;
  if (unitWAB === 5 && tensWAB === 3) return 62.6;
  if (unitWAB === 5 && tensWAB === 4) return 52.0;
  if (unitWAB === 5 && tensWAB === 5) return 41.3;
  if (unitWAB === 5 && tensWAB === 6) return 30.7;
  if (unitWAB === 5 && tensWAB === 7) return 20.0;
  if (unitWAB === 5 && tensWAB === 8) return 9.3;
  if (unitWAB === 5 && tensWAB === 9) return 0.0;

  if (unitWAB === 6 && tensWAB === 0) return 93.6;
  if (unitWAB === 6 && tensWAB === 1) return 82.9;
  if (unitWAB === 6 && tensWAB === 2) return 72.2;
  if (unitWAB === 6 && tensWAB === 3) return 61.6;
  if (unitWAB === 6 && tensWAB === 4) return 50.9;
  if (unitWAB === 6 && tensWAB === 5) return 40.0;
  if (unitWAB === 6 && tensWAB === 6) return 29.6;
  if (unitWAB === 6 && tensWAB === 7) return 18.9;
  if (unitWAB === 6 && tensWAB === 8) return 8.3;
  if (unitWAB === 6 && tensWAB === 9) return 0.0;

  if (unitWAB === 7 && tensWAB === 0) return 92.5;
  if (unitWAB === 7 && tensWAB === 1) return 81.8;
  if (unitWAB === 7 && tensWAB === 2) return 71.2;
  if (unitWAB === 7 && tensWAB === 3) return 60.5;
  if (unitWAB === 7 && tensWAB === 4) return 49.8;
  if (unitWAB === 7 && tensWAB === 5) return 39.2;
  if (unitWAB === 7 && tensWAB === 6) return 28.5;
  if (unitWAB === 7 && tensWAB === 7) return 17.9;
  if (unitWAB === 7 && tensWAB === 8) return 7.2;
  if (unitWAB === 7 && tensWAB === 9) return 0.0;

  if (unitWAB === 8 && tensWAB === 0) return 91.4;
  if (unitWAB === 8 && tensWAB === 1) return 80.8;
  if (unitWAB === 8 && tensWAB === 2) return 70.1;
  if (unitWAB === 8 && tensWAB === 3) return 59.4;
  if (unitWAB === 8 && tensWAB === 4) return 48.8;
  if (unitWAB === 8 && tensWAB === 5) return 38.1;
  if (unitWAB === 8 && tensWAB === 6) return 27.5;
  if (unitWAB === 8 && tensWAB === 7) return 16.8;
  if (unitWAB === 8 && tensWAB === 8) return 6.1;
  if (unitWAB === 8 && tensWAB === 9) return 0.0;

  if (unitWAB === 9 && tensWAB === 0) return 90.4;
  if (unitWAB === 9 && tensWAB === 1) return 79.7;
  if (unitWAB === 9 && tensWAB === 2) return 69.0;
  if (unitWAB === 9 && tensWAB === 3) return 58.4;
  if (unitWAB === 9 && tensWAB === 4) return 47.7;
  if (unitWAB === 9 && tensWAB === 5) return 37.1;
  if (unitWAB === 9 && tensWAB === 6) return 26.4;
  if (unitWAB === 9 && tensWAB === 7) return 15.7;
  if (unitWAB === 9 && tensWAB === 8) return 5.1;
  if (unitWAB === 9 && tensWAB === 9) return 0.0;

  throw new Error("Invalid input");
};
