import {
  isOrderAccepted,
  placeOrder,
  TOTAL_TIME_FOR_SANDWICHES,
} from "./snackShack";

describe("snackShack", () => {
  describe("placeOrder", () => {
    // iteration 1
    //   it("returns true when snackShack is called", () => {
    //     expect(snackShack()).toBe(true);
    //   });

    // iteration 2
    //   it("adds sandwich order to list of pending orders", () => {
    //     const currentTotalOrders = 0;
    //     expect(placeOrder(2, currentTotalOrders)).toBe(2);
    //   });

    // iteration 3
    it("returns total wait time for customer's order if they are the first in line", () => {
      const numberOfSandwichesInCurrentOrder = 2;
      const currentTotalOrders = 0;
      expect(
        placeOrder({ numberOfSandwichesInCurrentOrder, currentTotalOrders })
      ).toBe(180);
    });

    it("returns total wait time for customer's order if there are orders before theirs", () => {
      expect(
        placeOrder({
          numberOfSandwichesInCurrentOrder: 2,
          currentTotalOrders: 5,
        })
      ).toBe(630);
      expect(
        placeOrder({
          numberOfSandwichesInCurrentOrder: 1,
          currentTotalOrders: 3,
        })
      ).toBe(360);
      expect(
        placeOrder({
          numberOfSandwichesInCurrentOrder: 3,
          currentTotalOrders: 2,
        })
      ).toBe(450);
      expect(
        placeOrder({
          numberOfSandwichesInCurrentOrder: 7,
          currentTotalOrders: 6,
        })
      ).toBe(1170);
    });

    describe("isOrderAccepted", () => {
      // iteration 4
      it("returns true if order is accepted (i.e: wait time is under 5 mins and we still have inventory)", () => {
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 2,
            currentTotalOrders: 0,
            numberOfSandwichesServed: 30,
          })
        ).toBe(true);
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 1,
            currentTotalOrders: 2,
            numberOfSandwichesServed: 21,
          })
        ).toBe(true);
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 1,
            currentTotalOrders: 2,
            numberOfSandwichesServed: 16,
          })
        ).toBe(true);
      });
      it("returns false if order is rejected (i.e: wait time is over 5 mins)", () => {
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 2,
            currentTotalOrders: 5,
            numberOfSandwichesServed: 20,
          })
        ).toBe(false);
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 7,
            currentTotalOrders: 3,
            numberOfSandwichesServed: 12,
          })
        ).toBe(false);
      });

      it("returns false if we don't have enough inventory to support the order", () => {
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 2,
            currentTotalOrders: 0,
            numberOfSandwichesServed: 44,
          })
        ).toBe(false);
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 3,
            currentTotalOrders: 1,
            numberOfSandwichesServed: 43,
          })
        ).toBe(false);
        expect(
          isOrderAccepted({
            numberOfSandwichesInCurrentOrder: 3,
            currentTotalOrders: 3,
            numberOfSandwichesServed: 40,
          })
        ).toBe(false);
      });
    });
  });
});
