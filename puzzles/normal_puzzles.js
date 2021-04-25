// all non stair puzzles go into this file.
var fourbyfour = [[
  [20, 12, 12, 12],
  [21, 00, 00, 12],
  [12, 00, 00, 21],
  [12, 12, 12, 20]
],
[
  [12, 12, 21, 20],
  [12, 00, 00, 12],
  [12, 00, 00, 12],
  [20, 21, 12, 12]
],
[
  [00, 00, 00, 00],
  [00, 12, 12, 00],
  [00, 12, 12, 00],
  [00, 00, 00, 00]
]
];

var big_puzzle = [
  [00, 00, 00, 12, 12, 12, 12, 12, 12],
  [12, 20, 12, 00, 00, 00, 12, 20, 12],
  [12, 00, 21, 00, 12, 20, 12, 21, 12],
  [12, 00, 21, 00, 12, 12, 12, 00, 20],
  [12, 00, 12, 00, 21, 00, 00, 00, 12],
  [12, 20, 12, 00, 21, 00, 00, 21, 12],
  [12, 00, 12, 12, 12, 12, 12, 00, 12],
];

var spike_line = [
  [20, 20, 20],
  [12, 21, 12],
  [12, 21, 12],
  [12, 21, 12],
  [12, 00, 12],
  [12, 12, 12]
];

var spike_row = [
  [20, 12, 12, 12, 12, 12],
  [20, 21, 21, 21, 00, 12],
  [20, 12, 12, 12, 12, 12]
];

function get_normal_puzzle(columns, rows) {
  if (columns === 9 && rows === 7) {
    return big_puzzle;
  }
  else if (columns === 3 && rows === 6) {
    return spike_line;
  }
  else if (columns === 6 && rows === 3) {
    return spike_row;
  }
  else if (columns === 4 && rows === 4) {
    return fourbyfour[~~(fourbyfour.length * Math.random())];
  }
}
