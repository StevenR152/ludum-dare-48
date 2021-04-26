var GAME_SCREEN_WIDTH = 900;
var GAME_SCREEN_HEIGHT = 600;
var numberOfResets = 0;


var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,100,100);
var current_level = 2;
var MAX_STAIRS = 1;

var levels_size = [5,9,13,17,25,37];

var basic_tile_1 = 'Destroyable, 2D, DOM, Color, basic_tile_1';
var basic_tile_2 = 'Destroyable, 2D, DOM, Color, basic_tile_2';
var tile_leave1 = 'Destroyable, 2D, DOM, Color, tile_leaves_1';
var tile_leave2 = 'Destroyable, 2D, DOM, Color, tile_leaves_2';
var tile_rocks_1 = 'Destroyable, 2D, DOM, Color, tile_rocks_1';
var tile_rocks_2 = 'Destroyable, 2D, DOM, Color, tile_rocks_2';
var tile_rocks_3 = 'Destroyable, 2D, DOM, Color, tile_rocks_3';
var tile_rocks_4 = 'Destroyable, 2D, DOM, Color, tile_rocks_4';
var tile_rocks_5 = 'Destroyable, 2D, DOM, Color, tile_rocks_5';
var tile_moss = 'Destroyable, 2D, DOM, Color, tile_moss';
var tile_cracked = 'Destroyable, 2D, DOM, Color, tile_cracked_1';

// This array is selected for all floor tiles.
// number of times controls frequency.
var randomFloor = [
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	tile_leave1,
	tile_leave1,
	tile_leave2,
	tile_leave2,
	tile_rocks_1,
	tile_rocks_2,
	tile_rocks_3,
	tile_rocks_4,
	tile_rocks_5,
	tile_moss,
	tile_moss,
	tile_moss,
	tile_cracked,
	tile_cracked
];

var stairs = 'Destroyable, 2D, DOM, Color, stairs';
var stairs_up = 'Destroyable, 2D, DOM, Color, stairs_up';
var pillar1 = 'Destroyable, 2D, DOM, Color, pillar1';
var vase = 'Destroyable, 2D, DOM, Color, vase';
var chest = 'Destroyable, 2D, DOM, Color, chest';
var button = 'Button';
var spikes = 'TileSpikes';

var max_puzzle_width = 9;
var max_puzzle_height = 7;
var min_puzzle_width = 3;
var min_puzzle_height = 4;

//Keep 10-19 index values for solid objects, 20+ for interaction walkables
// TODO code the interaction walkables functionality properly
var tileMap = {
		// all normal floor tiles are 1 and randomly get picked later.
		8 : stairs,
		9 : stairs_up,
		11 : pillar1,
		12 : vase,
		13 : chest,
		20 : button,
		21 : spikes
}

//play button
var PLAY_BUTTON_WIDTH = 141;
var PLAY_BUTTON_HEIGHT = 51;

var PLAY_BUTTON_XPOS = GAME_SCREEN_WIDTH/2-50;
var PLAY_BUTTON_YPOS = GAME_SCREEN_HEIGHT/2+15;

var END_PLAY_BUTTON_XPOS = GAME_SCREEN_WIDTH/2-65
var END_PLAY_BUTTON_YPOS = GAME_SCREEN_HEIGHT/2-100


//music button position in start/end
var MUSIC_BUTTON_XPOS = GAME_SCREEN_WIDTH * 0.05;
var MUSIC_BUTTON_YPOS = GAME_SCREEN_HEIGHT * 0.05;
var MUSIC_BUTTON_WIDTH = 30;
var MUSIC_BUTTON_HEIGHT = 30;

//music button position during game
var GAME_MUSIC_BUTTON_XPOS = GAME_SCREEN_WIDTH * 0.15;
var GAME_MUSIC_BUTTON_YPOS = GAME_SCREEN_HEIGHT * 0.15;
var GAME_MUSIC_BUTTON_WIDTH = 80;
var GAME_MUSIC_BUTTON_HEIGHT = 80;
