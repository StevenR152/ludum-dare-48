// this will, given an x by m set of coordinates, find a puzzle to fit in the given spacing that fits these constraints
// it should then return the object level it was given as an array with all the correct puzzle objects positioned

function place_puzzle(puz_width, puz_height, startcol, startrow, object_map, stairs, puzzle_flag_map) {
  // console.log (puz_width, puz_height, startcol, startrow, puzzle_flag_map, object_map);

  //here usually you would choose a puzzle based on coordinates given
  //instead i'll keep it simple for now

  if (stairs === true) {
    var puzzle_map = get_stair_puzzle(puz_width, puz_height, startcol, startrow);
  }
  else {
    var puzzle_map = get_normal_puzzle(puz_width, puz_height);
  }
   if (puzzle_map !== undefined) {
    for (var row=0; row < puz_height; row++) {
      var this_row = startrow + row;
      for (var col=0; col < puz_width; col++) {
        var this_col = startcol + col;
        object_map[this_row][this_col] = puzzle_map[row][col];
        if (stairs === true) {
          puzzle_flag_map[this_row][this_col] = 2;
        } else if (puzzle_map[row][col] === -1) {
            object_map[this_row][this_col] = 0;
            puzzle_flag_map[this_row][this_col] = 2;
          }
        else {
          puzzle_flag_map[this_row][this_col] = 1;
        }
        }
      }
    }
  return [object_map, puzzle_flag_map];
};



// this generator will generate empty tile spotches
function place_holes(tile_map) {
  // make some fun holes so the ground isn't so boring
  return tile_map;
}
