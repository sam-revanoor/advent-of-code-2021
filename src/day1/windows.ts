export const windows = (measurements: number[]): number[] => {
  const windowMeasurements = [];
  for (let i = 0; i < measurements.length - 2; i++) {
    const sum = measurements[i] + measurements[i + 1] + measurements[i + 2];
    windowMeasurements.push(sum);
  }
  return windowMeasurements;
};
