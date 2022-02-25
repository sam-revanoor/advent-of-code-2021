export const anagramGenerator = (word: string): string[] => {
  const characters = word.split("");
  const anagrams: string[] = [];

  if (word.length < 2) return [word];

  characters.forEach((char, idx) => {
    const remainingChars =
      word.slice(0, idx) + word.slice(idx + 1, word.length);
    const result = anagramGenerator(remainingChars);
    result.forEach((anagram) => {
      anagrams.push(char + anagram);
    });
  });

  return [...new Set(anagrams)]; // removes duplicates
};
