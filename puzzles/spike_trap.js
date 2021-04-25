// all the versions of spike trap puzzles go into this file
var simple_puzzle_xwall_stair = [
  [12, 00, 08, 00, 12],
  [12, 00, 00, 00, 12],
  [12, 21, 21, 21, 12], //21 to be replaced with spikes
  [12, 00, 00, 00, 12],
  [00, 00, 20, 00, 00], // 12 to be replaced with button
];

var simple_puzzle_ywall_stair = [
  [12, 12, 12, 12, 00],
  [00, 00, 21, 00, 00],
  [08, 00, 21, 00, 20],
  [00, 00, 21, 00, 00],
  [12, 12, 12, 12, 00],
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

function get_spike_puzzle(sizex, sizey, startx, starty) {
  if (startx === 0 && sizey === simple_puzzle_xwall_stair.length &&
      sizex === simple_puzzle_xwall_stair[0].length) {
    return simple_puzzle_xwall_stair;
  }
  else if (starty === 0 && sizey === simple_puzzle_ywall_stair.length &&
      sizex === simple_puzzle_ywall_stair[0].length) {
    return simple_puzzle_ywall_stair;
  }
  else if (sizex === 7 && sizey === 9) {
    return big_puzzle;
  }
}
