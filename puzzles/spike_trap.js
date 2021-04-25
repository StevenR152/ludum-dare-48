// all the versions of spike trap puzzles go into this file
var simple_puzzle_xwall_stair = [
  [12, 0, 8, 0, 12],
  [12, 0, 0, 0, 12],
  [12, 13, 13, 13, 12], //13 to be replaced with spikes
  [12, 0, 0, 0, 12],
  [0, 0, 11, 0, 0], // 12 to be replaced with button
];

var simple_puzzle_ywall_stair = [
  [12, 12, 12, 12, 0],
  [0, 0, 13, 0, 0],
  [8, 0, 13, 0, 11],
  [0, 0, 13, 0, 0],
  [12, 12, 12, 12, 0],
];

var big_puzzle = [
  [00, 00, 00, 12, 12, 12, 12, 12, 12],
  [12, 11, 12, 00, 00, 00, 12, 11, 12],
  [12, 00, 13, 00, 12, 11, 12, 13, 12],
  [12, 00, 13, 00, 12, 12, 12, 00, 11],
  [12, 00, 12, 00, 13, 00, 00, 00, 12],
  [12, 11, 12, 12, 12, 12, 12, 13, 12],
];

function get_spike_puzzle(sizex, sizey, startx, starty) {
  if (startx === 0) {
    return simple_puzzle_xwall_stair;
  }
  else if (starty === 0) {
    return simple_puzzle_ywall_stair;
  }
  else if (sizex === 6 && sizey === 9) {
    return big_puzzle;
  }
}
