interface StringCounter {
  string?: number;
}

export function stringsMix(s1: string, s2: string): string {
  if (s1 === s2) return "";
  const s1Array = s1.split("");
  const s2Array = s2.split("");

  const s1OnlyLowerCase = s1Array.filter((char) => char.toUpperCase() !== char);
  const s2OnlyLowerCase = s2Array.filter((char) => char.toUpperCase() !== char);

  const s1Counter: StringCounter = {};
  const s2Counter: StringCounter = {};

  if (s1OnlyLowerCase.join("") === s2OnlyLowerCase.join("")) return "";

  addRepetitionInfo(s1OnlyLowerCase, s2OnlyLowerCase, s1Counter, s2Counter);

  filterOutSingularRepetitions(s1Counter, s2Counter);

  Object.fromEntries(Object.entries(s1Counter).sort());
  Object.fromEntries(Object.entries(s2Counter).sort());

  const finalCounter = { ...s1Counter, ...s2Counter };
  const sortable = Object.entries(finalCounter)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  const repInfo = [];
  console.log(sortable);

  for (const [key, value] of Object.entries(sortable)) {
    if (s1Counter[key] && s2Counter[key]) {
      repInfo.push(`=:${key.repeat(value)}`);
    } else if (s1Counter[key]) {
      repInfo.push(`1:${key.repeat(value)}`);
    } else if (s2Counter[key]) {
      repInfo.push(`2:${key.repeat(value)}`);
    }
  }
  console.log({ repInfo });
  return repInfo.join("/");
}

function addRepetitionInfo(
  s1OnlyLowerCase,
  s2OnlyLowerCase,
  s1Counter,
  s2Counter
) {
  s1OnlyLowerCase.forEach((char) => {
    if (s1Counter[char]) {
      s1Counter[char] += 1;
    } else {
      s1Counter[char] = 1;
    }
  });

  s2OnlyLowerCase.forEach((char) => {
    if (s2Counter[char]) {
      s2Counter[char] += 1;
    } else {
      s2Counter[char] = 1;
    }
  });
}

function filterOutSingularRepetitions(s1Counter, s2Counter) {
  for (const [key, value] of Object.entries(s1Counter)) {
    if (value < 2) {
      delete s1Counter[key];
    }
  }
  for (const [key, value] of Object.entries(s2Counter)) {
    if (value < 2) {
      delete s2Counter[key];
    }
  }
}
