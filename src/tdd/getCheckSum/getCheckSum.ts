/*
Given a list of boxIds,
return the number of boxIds that contain exactly two of any letter
multiplied by the number of boxIds that contain exactly 3 of any letter

For example, if you see the following box IDs:

abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.
Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

What is the checksum for your list of box IDs?
*/

interface Repetition {
  letterRepeatsTwice: boolean;
  letterRepeatsThrice: boolean;
}

export const getCheckSum = (boxId: string): Repetition => {
  const boxIdArray = boxId.split("");
  const uniqueCharacters = new Set(boxIdArray);

  let letterRepeatsTwice = false;
  let letterRepeatsThrice = false;

  uniqueCharacters.forEach((uniqueChar) => {
    const occurencesOfCharacter = boxIdArray.filter(
      (char) => char === uniqueChar
    ).length;
    if (occurencesOfCharacter === 2) letterRepeatsTwice = true;
    if (occurencesOfCharacter === 3) letterRepeatsThrice = true;
  });

  return { letterRepeatsTwice, letterRepeatsThrice };
};

export const checkBoxIds = (boxIds: string[]) => {
  const repetitions = boxIds.map((boxId) => getCheckSum(boxId));
  return repetitions;
};

export const countIdsWithTwoLettersRepeated = (repetitions: Repetition[]) => {
  let sum = 0;
  repetitions.forEach((rep) => {
    if (rep.letterRepeatsTwice) {
      sum += 1;
    }
  });
  return sum;
};

export const countIdsWithThreeLettersRepeated = (repetitions: Repetition[]) => {
  let sum = 0;
  repetitions.forEach((rep) => {
    if (rep.letterRepeatsThrice) {
      sum += 1;
    }
  });
  return sum;
};

export const productOfBoxIdsWithRepetitions = (boxIds: string[]) => {
  const repetitions: Repetition[] = checkBoxIds(boxIds);
  return (
    countIdsWithTwoLettersRepeated(repetitions) *
    countIdsWithThreeLettersRepeated(repetitions)
  );
};
