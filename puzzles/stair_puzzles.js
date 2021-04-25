//TODO have a grid of different sized stair puzzles for randomness - Y=0
var simple_puzzle_xwall_stair = [
  [12, 00, 08, 00, 12],
  [12, 00, 00, 00, 12],
  [12, 21, 21, 21, 12],
  [12, 00, 00, 00, 12],
  [00, 00, 20, 00, 00],
];

//TODO have a grid of different sized stair puzzles for randomness - X=0
var simple_puzzle_ywall_stair = [
  [12, 12, 12, 12, 00],
  [00, 00, 21, 00, 00],
  [08, 00, 21, 00, 20],
  [00, 00, 21, 00, 00],
  [12, 12, 12, 12, 00],
];


function get_stair_puzzle(sizex, sizey, startrow, startcol) {
  if (startrow === 0 && sizey === simple_puzzle_xwall_stair.length &&
      sizex === simple_puzzle_xwall_stair[0].length) {
    return simple_puzzle_ywall_stair;
  }
  else if (startcol === 0 && sizey === simple_puzzle_ywall_stair.length &&
      sizex === simple_puzzle_ywall_stair[0].length) {
    return simple_puzzle_xwall_stair;
  }

}
