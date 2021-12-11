export const appendNewTerrain = (terrain: string[][]): string[][] => {
  const newTerrain = terrain.map((row) => {
    return (row = [...row, ...row]);
  });
  return newTerrain;
};
