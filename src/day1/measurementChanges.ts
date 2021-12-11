import { windows } from "./windows";

export const measurementChanges = (
  measurements: number[],
  value: string
): number => {
  const changes = measurements.map((num, i) => {
    if (i === 0) {
      return "n/a";
    }
    if (num < measurements[i - 1]) {
      return "decreased";
    }
    if (num > measurements[i - 1]) {
      return "increased";
    }
  });
  return changes.filter((change) => change === value).length;
};

export const windowsMeasurementChanges = (
  measurements: number[],
  value: string
): number => {
  return measurementChanges(windows(measurements), "increased");
};
