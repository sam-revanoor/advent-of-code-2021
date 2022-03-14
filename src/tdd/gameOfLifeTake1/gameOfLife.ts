let grid;
let cols = 10;
let rows = 10;

export function gameOfLife() {
  grid = init();
  console.table(grid);
  return grid;
}

function make2DArray(cols: number, rows: number) {
  let array = new Array(cols);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

function init() {
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }
  return grid;
}
