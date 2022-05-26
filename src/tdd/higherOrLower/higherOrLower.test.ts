import { playGame, startGame, playTurn } from "./higherOrLower";
import { shuffleCards } from "./shuffleCards";

jest.mock("./shuffleCards");

const mockShuffleCards = shuffleCards as jest.Mock;

describe("higherOrLowerGame", () => {
  beforeEach(() => {
    mockShuffleCards.mockReturnValue([4, 5, 2, 8, 9, 10, 1, 3, 7, 6]);
  });

  describe("playGame", () => {
    //   it("returns true to show that files are linked correctly", () => {
    //     expect(playGame()).toBe(true);
    //   });
    //   it("returns unshuffled deck of 10 cards", () => {
    //     expect(playGame()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //   });
    //   it("returns shuffled deck of 10 cards", () => {
    //     expect(playGame()).toHaveLength(10);
    //     expect(playGame()).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //   });
    //   it("returns a value if higher/lower is passed into fn", () => {
    //     expect(playGame("higher")).toHaveLength(10);
    //     expect(playGame("lower")).toHaveLength(10);
    //   });
    // it("returns true if guess is correct", () => {
    //   expect(playGame("higher")).toBe(true);
    //   expect(playGame("lower")).toBe(false);
    // });
    // it("plays the game", () => {
    //     playGame()
    // })
  });

  describe("startGame", () => {
    it("shuffles 10 cards and returns first value", () => {
      expect(startGame(10)).toStrictEqual({
        firstCard: 4,
        remainingCards: [5, 2, 8, 9, 10, 1, 3, 7, 6],
      });
    });
  });

  describe("playTurn", () => {
    it("shuffles 10 cards and returns first value", () => {
      //   expect(playTurn(4, [5, 2, 8, 9, 10, 1, 3, 7, 6], "higher")).toBe(true);
      //   expect(playTurn(4, [5, 2, 8, 9, 10, 1, 3, 7, 6], "lower")).toBe(false);
      expect(playTurn(4, [5, 2, 8, 9, 10, 1, 3, 7, 6], "higher")).toStrictEqual(
        {
          result: true,
          currentCard: 5,
          remainingCards: [2, 8, 9, 10, 1, 3, 7, 6],
        }
      );
    });
  });
});
