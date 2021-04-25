var GAME_SCREEN_WIDTH = 900;
var GAME_SCREEN_HEIGHT = 600;
var numberOfResets = 0;

var NUMBER_OF_RANDOM_OBJECTS = 4; // vase, vase2, pillar, chest etc - randomly placed.

var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,100,100);
var current_level = 0;
var MAX_STAIRS = 1;

var levels_size = [5,9,13,17,27,39]; // to move to constants later
var basic_tile_1 = 'Destroyable, 2D, DOM, Color, basic_tile_1';
var basic_tile_2 = 'Destroyable, 2D, DOM, Color, basic_tile_2';
var tile_leave1 = 'Destroyable, 2D, DOM, Color, tile_leaves_1';
var tile_leave2 = 'Destroyable, 2D, DOM, Color, tile_leaves_2';
var tile_cracked = 'Destroyable, 2D, DOM, Color, tile_cracked_1';
var stairs = 'Destroyable, 2D, DOM, Color, stairs';
var stairs_up = 'Destroyable, 2D, DOM, Color, stairs_up';
var pillar1 = 'Destroyable, 2D, DOM, Color, pillar1';
var vase = 'Destroyable, 2D, DOM, Color, vase';
var vase2 = 'Destroyable, 2D, DOM, Color, vase2';
var chest = 'Destroyable, 2D, DOM, Color, chest';

//Keep 10+ index values for solid objects
var tileMap = {
		1 : basic_tile_1,
		2 : basic_tile_2,
		3 : tile_leave1,
		4 : tile_leave2,
		5 : tile_cracked,
		8 : stairs,
		9 : stairs_up,
		11 : pillar1,
		12 : vase,
		13 : chest,
		14 : vase2,
}


var PLAY_BUTTON_XPOS = GAME_SCREEN_WIDTH/2-50;
var PLAY_BUTTON_YPOS = GAME_SCREEN_HEIGHT/2+15;
var PLAY_BUTTON_WIDTH = 141;
var PLAY_BUTTON_HEIGHT = 51;

//music button position in start/end
var MUSIC_BUTTON_XPOS = 30;
var MUSIC_BUTTON_YPOS = 30;
var MUSIC_BUTTON_WIDTH = 38;
var MUSIC_BUTTON_HEIGHT = 42;

//music button position during game
var GAME_MUSIC_BUTTON_XPOS = -1400;
var GAME_MUSIC_BUTTON_YPOS = -800;
var GAME_MUSIC_BUTTON_WIDTH = 80;
var GAME_MUSIC_BUTTON_HEIGHT = 80;