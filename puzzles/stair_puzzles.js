//TODO have a grid of different sized stair puzzles for randomness - Y=0
// All stair puzzles can use the same linkage numbers of 0-10 which the other puzzles dont use.
var simple_puzzle_xwall_stair = [
  [12, 2001, 08, 0000, 12],
  [12, 0000, 0000, 0000, 12],
  [12, 2101, 2102, 2102, 12],
  [12, 0000, 0000, 0000, 12],
  [00, 0000, 2001, 2002, 0000],
];

//TODO have a grid of different sized stair puzzles for randomness - X=0
var simple_puzzle_ywall_stair = [
  [12, 12, 12, 12, 00],
  [00, 00, 2101, 00, 00],
  [08, 00, 2101, 00, 2001],
  [2001, 00, 2101, 00, 00],
  [12, 12, 12, 12, 00],
];


function get_stair_puzzle(sizex, sizey, startrow, startcol) {
  if (startcol === 0 && sizey === simple_puzzle_ywall_stair.length &&
      sizex === simple_puzzle_ywall_stair[0].length) {
    return simple_puzzle_xwall_stair;
  }
  else if (startrow === 0 && sizey === simple_puzzle_xwall_stair.length &&
      sizex === simple_puzzle_xwall_stair[0].length) {
    return simple_puzzle_ywall_stair;
  }
}
