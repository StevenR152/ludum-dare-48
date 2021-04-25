// this will, given an x by m set of coordinates, find a puzzle to fit in the given spacing that fits these constraints
// it should then return the object level it was given as an array with all the correct puzzle objects positioned

function place_puzzle(sizex, sizey, startx, starty, object_map, stairs, puzzle_flag_map) {


  //here usually you would choose a puzzle based on coordinates given
  //instead i'll keep it simple for now

  if (stairs === true) {
    var puzzle_map = get_stair_puzzle(sizex, sizey, startx, starty);
  }
  else {
    var puzzle_map = get_normal_puzzle(sizex, sizey, startx, starty);
  }

   if (puzzle_map !== undefined) {
    for (var row=0; row < sizey; row++) {
      var this_row = starty + row;
      for (var col=0; col < sizex; col++) {
        var this_col = startx + col;
        // console.log(this_row, this_col, object_map, puzzle_map);
        object_map[this_row][this_col] = puzzle_map[row][col];
        puzzle_flag_map[this_row][this_col] = 1;
        }
      }
    }
  return object_map, puzzle_flag_map;
};



// this generator will generate empty tile spotches
function place_holes(tile_map) {
  // make some fun holes so the ground isn't so boring
  return tile_map;
}
