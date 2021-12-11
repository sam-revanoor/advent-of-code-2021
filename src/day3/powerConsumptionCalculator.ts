export const finalAnswer = (binaries: string[]): number => {
  return (
    powerConsumptionCalculator(binaries) * powerConsumptionCalculator2(binaries)
  );
};

const powerConsumptionCalculator = (binaries: string[]): number => {
  const n = binaries[0].length - 1;
  const count = setUpCountObj(n);
  let oxygenRating = "";
  for (let i = 0; i <= n; i++) {
    if (filterBinariesBy(oxygenRating, binaries).length > 1) {
      const filteredBinaries = filterBinariesBy(oxygenRating, binaries);

      // while (filteredBinaries.length > 1) {
      filteredBinaries.forEach((binary) => {
        addBinaryCount(binary[i], count, i);
        // add new binary array here
      });
      oxygenRating = oxygenRating.concat(getMostCommonValue(count[i]));

      // }
    } else {
      oxygenRating = filterBinariesBy(oxygenRating, binaries)[0];
    }
  }
  return parseInt(oxygenRating, 2);
  // const gammaRate = mostCommonValue(count).join("");
  // const epsilonRate = getEpsilonRateValue(count).join("");
  // const gammaRateDec = parseInt(gammaRate, 2);
  // const epsilonRateDec = parseInt(epsilonRate, 2);
  // return gammaRateDec * epsilonRateDec;
};

const powerConsumptionCalculator2 = (binaries: string[]): number => {
  const n = binaries[0].length - 1;
  const count = setUpCountObj(n);
  let co2Rating = "";
  for (let i = 0; i <= n; i++) {
    if (filterBinariesBy(co2Rating, binaries).length > 1) {
      const filteredBinaries = filterBinariesBy(co2Rating, binaries);

      // while (filteredBinaries.length > 1) {
      filteredBinaries.forEach((binary) => {
        addBinaryCount(binary[i], count, i);
        // add new binary array here
      });
      co2Rating = co2Rating.concat(getLeastMostCommonValue(count[i]));

      // }
    } else {
      co2Rating = filterBinariesBy(co2Rating, binaries)[0];
    }
  }
  return parseInt(co2Rating, 2);
  // const gammaRate = mostCommonValue(count).join("");
  // const epsilonRate = getEpsilonRateValue(count).join("");
  // const gammaRateDec = parseInt(gammaRate, 2);
  // const epsilonRateDec = parseInt(epsilonRate, 2);
  // return gammaRateDec * epsilonRateDec;
};

function filterBinariesBy(oxyRating: string, binaries: string[]): string[] {
  return binaries.filter((binary) => {
    return binary.startsWith(oxyRating);
  });
}

function addBinaryCount(n: string, count: any, countNum: number) {
  if (n === "0") {
    count[countNum].zero += 1;
  }
  if (n === "1") {
    count[countNum].one += 1;
  }
}

function getMostCommonValue(char: Record<string, number>): string {
  if (char.one >= char.zero) {
    return "1";
  } else {
    return "0";
  }
}

function getLeastMostCommonValue(char: Record<string, number>): string {
  if (char.one < char.zero) {
    return "1";
  } else {
    return "0";
  }
}

function setUpCountObj(n: number): Record<string, number>[] {
  const count = [];
  for (let i = 0; i <= n; i++) {
    count.push({ zero: 0, one: 0 });
  }

  return count;
}

function getGammaRateValue(count: any): string[] {
  const gammaRate = count.map((obj: Record<string, number>) => {
    getMostCommonValue(obj);
  });

  return gammaRate;
}

function getEpsilonRateValue(count: any): string[] {
  const epsilonRate = count.map((obj: Record<string, number>) => {
    getLeastMostCommonValue(obj);
  });

  return epsilonRate;
}
