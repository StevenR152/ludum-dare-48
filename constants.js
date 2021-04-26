var GAME_SCREEN_WIDTH = 900;
var GAME_SCREEN_HEIGHT = 600;
var numberOfResets = 0;


var TILE_HEIGHT = 128;
var TILE_WIDTH = 256;
var isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,100,100);
var current_level = 0;
var MAX_STAIRS = 1;

var levels_size = [5,9,13,17,25,37];

// Default floor tiles
var basic_tile_1 = 'Tile, Destroyable, 2D, DOM, Color, basic_tile_1';
var basic_tile_2 = 'Tile, Destroyable, 2D, DOM, Color, basic_tile_2';
var tile_leave1 = 'Tile, Destroyable, 2D, DOM, Color, tile_leaves_1';
var tile_leave2 = 'Tile, Destroyable, 2D, DOM, Color, tile_leaves_2';
var tile_twigs_1 = 'Tile, Destroyable, 2D, DOM, Color, tile_twigs_1';
var tile_twigs_2 = 'Tile, Destroyable, 2D, DOM, Color, tile_twigs_2';
var tile_rocks_1 = 'Tile, Destroyable, 2D, DOM, Color, tile_rocks_1';
var tile_rocks_2 = 'Tile, Destroyable, 2D, DOM, Color, tile_rocks_2';
var tile_rocks_3 = 'Tile, Destroyable, 2D, DOM, Color, tile_rocks_3';
var tile_rocks_4 = 'Tile, Destroyable, 2D, DOM, Color, tile_rocks_4';
var tile_rocks_5 = 'Tile, Destroyable, 2D, DOM, Color, tile_rocks_5';
var tile_moss = 'Tile, Destroyable, 2D, DOM, Color, tile_moss';
var tile_cracked = 'Tile, Destroyable, 2D, DOM, Color, tile_cracked_1';

// Stairs
var stairs = 'Destroyable, 2D, DOM, Color, stairs';
var stairs_up = 'Destroyable, 2D, DOM, Color, stairs_up';

// Blocking Objects
var concreteblock = 'Destroyable, 2D, DOM, Color, concreteblock';
var pillar1 = 'Destroyable, 2D, DOM, Color, pillar1';
var pillarTall = 'Destroyable, 2D, DOM, Color, pillarTall';
var pillarMarble = 'Destroyable, 2D, DOM, Color, pillarMarble';
var vase = 'Destroyable, 2D, DOM, Color, vase';
var vase2 = 'Destroyable, 2D, DOM, Color, vase2';
var vase3 = 'Destroyable, 2D, DOM, Color, vase3';
var chest = 'Destroyable, 2D, DOM, Color, chest';

// Other
var guard = 'Destroyable, 2D, DOM, Color, guard';
var item_key = 'Destroyable, 2D, DOM, Color, props_key';
var item_scroll = 'Destroyable, 2D, DOM, Color, props_scroll';

// Interactive Objects
var button = 'Button';
var spikes = 'TileSpikes';

// This array is selected for all floor tiles.
// number of times controls frequency.
var randomFloor = [
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
	basic_tile_1,
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
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	basic_tile_2,
	tile_twigs_1,
	tile_twigs_1,
	tile_twigs_2,
	tile_twigs_2,
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

var randomBlockingObjects = [
	concreteblock,
	concreteblock,
	concreteblock,
	vase,
	vase,
	vase,
	vase,
	vase,
	vase,
	vase,
	vase2,
	vase2,
	vase2,
	vase2,
	vase2,
	vase2,
	vase2,
	vase3,
	vase3,
	vase3,
	vase3,
	vase3,
	vase3,
	vase3,
]

var items_to_be_placed =
[
	38, 38, 39, 39 //key
];

var max_puzzle_width = 9;
var max_puzzle_height = 9;
var min_puzzle_width = 3;
var min_puzzle_height = 3;

//Keep 10-19 index values for solid objects, 20+ for interaction walkables
// TODO code the interaction walkables functionality properly
var tileMap = {
		// all normal floor tiles are 1 and randomly get picked later.
		8 : stairs,
		9 : stairs_up,
		// 12's will be randomly picked as blocking tiles.
		20 : button,
		21 : spikes,
		38 : item_key,
		39 : item_scroll
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
