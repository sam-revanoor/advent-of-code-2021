// FIRST WAY :)
export const getLeafValues = (
  object: { [key: string]: any },
  leafNodes: any[] = []
): any[] => {
  Object.values(object).forEach((val) => {
    if (typeof val !== "object") {
      leafNodes.push(val);
    } else {
      getLeafValues(val, leafNodes);
    }
  });
  return leafNodes;
};

// SECOND WAY :)
// export const getLeafValues = (object: { [key: string]: any }): any[] => {
//   const leafNodes: any[] = [];
//   Object.values(object).forEach((val) => {
//     if (typeof val !== "object") {
//       leafNodes.push(val);
//     } else {
//       leafNodes.push(...getLeafValues(val));
//     }
//   });
//   return leafNodes;
// };
