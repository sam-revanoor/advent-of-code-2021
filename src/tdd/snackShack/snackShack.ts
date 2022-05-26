export const TOTAL_TIME_FOR_SANDWICHES = 90;

interface PlaceOrderInformation {
  numberOfSandwichesInCurrentOrder: number;
  currentTotalOrders: number;
}

interface OrderInformation extends PlaceOrderInformation {
  numberOfSandwichesServed: number;
}

export const isOrderAccepted = (
  orderInformation: OrderInformation
): boolean => {
  const {
    numberOfSandwichesInCurrentOrder,
    currentTotalOrders,
    numberOfSandwichesServed,
  } = orderInformation;
  const totalWaitTimeForOrder = placeOrder({
    numberOfSandwichesInCurrentOrder,
    currentTotalOrders,
  });
  return (
    totalWaitTimeForOrder < 300 &&
    numberOfSandwichesInCurrentOrder +
      numberOfSandwichesServed +
      currentTotalOrders <=
      45
  );
};

export function placeOrder({
  numberOfSandwichesInCurrentOrder,
  currentTotalOrders,
}: PlaceOrderInformation): number {
  return (
    currentTotalOrders * TOTAL_TIME_FOR_SANDWICHES +
    TOTAL_TIME_FOR_SANDWICHES * numberOfSandwichesInCurrentOrder
  );
}
