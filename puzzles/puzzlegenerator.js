// this will, given an x by m set of coordinates, find a puzzle to fit in the given spacing that fits these constraints
// it should then return the object level it was given as an array with all the correct puzzle objects positioned

function place_puzzle(sizex, sizey, startx, starty, object_map, stairs) {


  //here usually you would choose a puzzle based on coordinates given
  //instead i'll keep it simple for now

  if (stairs === true) {
    var puzzle_map = get_stair_puzzle(sizex, sizey, startx, starty);
  }
  else {
    var puzzle_map = get_normal_puzzle(sizex, sizey, startx, starty);
  }

   if (puzzle_map !== undefined) {
    for (var row=0; row < sizex; row++) {
      for (var col=0; col < sizey; col++) {
        var this_row = startx + row;
        var this_col = starty + col;
        object_map[this_row][this_col] = puzzle_map[row][col];
        }
      }
    }
  return object_map;
};



// this generator will generate empty tile spotches
function place_holes(tile_map) {
  // make some fun holes so the ground isn't so boring
  return tile_map;
}
