const fs = require("fs");

const input = fs.readFileSync("src/day4/input.txt", "utf-8");
const sampleInput = fs.readFileSync("src/day4/sampleInput.txt", "utf-8");

function parseGame(input) {
  input = input.split("\n");
  // The first line is the draw
  const draw = toNumbers(input.shift());
  const boards = parseBoards(toNumbers(input.join(" ")));
  return { draw, boards };
}

function toNumbers(s) {
  return s
    .split(/[^\d.]+/)
    .filter((t) => t !== "")
    .map(Number);
}

function parseBoards(numbers) {
  let boards = [];
  let board = [[]];
  let y = 0;
  for (let i = 0; i < numbers.length; i++) {
    board[y].push(numbers[i]);
    // If the row filled up
    if (board[y].length == 5) {
      // And we have 5 rows
      if (board.length == 5) {
        // Start a new board
        boards.push(board);
        board = [[]];
        y = 0;
      } else {
        // Start a new row
        board.push([]);
        y++;
      }
    }
  }
  return boards;
}
function* play({ draw, boards }) {
  for (let i = 0; i < draw.length; i++) {
    const call = draw[i];
    let b = 0;
    while (b < boards.length) {
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          if (boards[b][y][x] === call) {
            boards[b][y][x] = -1;
          }
        }
      }

      if (isComplete(boards[b])) {
        yield { b, call, board: boards.splice(b, 1)[0] };
      } else {
        b++;
      }
    }
  }
}

function isComplete(board) {
  const marked = (xs) => xs.every((n) => n < 0);
  return [...Array(5)].some(
    (_, i) =>
      marked(board[i]) || marked([...Array(5)].map((_, j) => board[j][i]))
  );
}

function score({ call, board }) {
  const unmarkedSum = board
    .flat()
    .filter((n) => n > 0)
    .reduce((s, n) => s + n, 0);
  return call * unmarkedSum;
}

function p1(input) {
  return score(play(parseGame(input)).next().value);
}

function p2(input) {
  let generator = play(parseGame(input));
  while (true) {
    let { value, done } = generator.next();
    if (done) return score(lastValue);
    lastValue = value;
  }
}

console.log(p1(input));
console.log(p2(input));
// export const squidBingo = () => {
//   const game = parseGame(sampleInput);
//   const draw = game.draw;
//   const boards = game.boards;
//   for (let i = 0; i < 13; i++) {
//     let markedRow: any = [];
//     let markedCol: any = [];
//     if (markedRow.length < 1) {
//       for (let j = 0; j < boards.length; j++) {
//         for (let k = 0; k < boards[j].length; k++) {
//           for (let l = 0; l < boards[j][k].length; l++) {
//             if (boards[j][k][l] === draw[i]) {
//               boards[j][k][l] = "MARKED";
//             }
//           }
//           console.log(boards[j][k]);
//           if (
//             boards[j][k].every((val) => {
//               val === "MARKED";
//             })
//           ) {
//             markedRow = [...boards[j][k]];
//             console.log({ markedRow });
//             return markedRow;
//             // markedRow = checkRows(boards[j][k]);
//           }
//         }
//       }
//     } else {
//       return markedRow[0];
//     }
//     console.log({ markedRow });
//   }
// };

// function checkRows(row) {
//   if (
//     row.every((val) => {
//       val === "MARKED";
//     }) === true
//   ) {
//     return row;
//   }
//   return [];
// }

// for each loop of the draw list, go through all boards and mark
// called out word from each board
// after boards are marked, go through each board to see if
// any whole rows or columns are marked
