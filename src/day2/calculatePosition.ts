export const calculatePosition = (
  coordinates: Record<string, number>[]
): number => {
  const depthPosition = [0, 0, 0];
  //                [ pos, dep, aim]
  coordinates.forEach((coord) => {
    switch (Object.keys(coord)[0]) {
      case "forward":
        depthPosition[0] = depthPosition[0] + Object.values(coord)[0];
        depthPosition[1] =
          depthPosition[1] + depthPosition[2] * Object.values(coord)[0];
        break;
      case "down":
        depthPosition[2] = depthPosition[2] + Object.values(coord)[0];
        break;
      case "up":
        depthPosition[2] = depthPosition[2] - Object.values(coord)[0];
        break;
    }
  });
  console.log(depthPosition);
  return depthPosition[0] * depthPosition[1];
};
