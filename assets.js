
//
var gameAssets = {
    "audio": {
	   	"bgAudio" : ["assets/sounds/sand_dune.mp3"],
	// 	"glass" : ["assets/sounds/glass.wav"],
	// 	"unlock" : ["assets/sounds/unlock.wav"]
    },
    "sprites": {
      //tiles
      "assets/images/tile_blue.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_blue": [0, 0]}
      },
      "assets/images/tile_green.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_green": [0, 0]}
      },
      "assets/images/tile_pink.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_pink": [0, 0]}
      },
      "assets/images/tile_purple.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_purple": [0, 0]}
      },

      // -- Normal floor tiles -- //
      "assets/images/basic_tile_1.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"basic_tile_1": [0, 0]}
      },
      "assets/images/basic_tile_2.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"basic_tile_2": [0, 0]}
      },
      "assets/images/tile_cracked_1.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_cracked_1": [0, 0]}
      },
      "assets/images/tile_leaves_1.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_leaves_1": [0, 0]}
      },
      "assets/images/tile_leaves_2.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_leaves_2": [0, 0]}
      },
      "assets/images/tile_twigs1.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_twigs_1": [0, 0]}
      },
      "assets/images/tile_twigs2.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_twigs_2": [0, 0]}
      },
      "assets/images/tile_moss1.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_moss": [0, 0]}
      },
      "assets/images/tile_rocks1.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_rocks_1": [0, 0]}
      },
      "assets/images/tile_rocks2.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_rocks_2": [0, 0]}
      },
      "assets/images/tile_rocks3.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_rocks_3": [0, 0]}
      },
      "assets/images/tile_rocks4.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_rocks_4": [0, 0]}
      },
      "assets/images/tile_rocks5.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_rocks_5": [0, 0]}
      },
      // -- END: Normal floor tiles -- //

      // -- Start: Blocking objects -- //
      "assets/images/pillar1.png": {
        "tile" : 256,
        "tileh": 309,
        "map": {"pillar1": [0, 0]}
      },
      "assets/images/object_pillarbigger.png": {
        "tile" : 256,
        "tileh": 405,
        "map": {"pillarTall": [0, 0]}
      },
      "assets/images/pillar_marble.png": {
        "tile" : 256,
        "tileh": 405,
        "map": {"pillarMarble": [0, 0]}
      },
      "assets/images/object_treasurechest.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"chest": [0, 0]}
      },
      "assets/images/object_vase1.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"vase": [0, 0]}
      },
      "assets/images/object_vase2.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"vase2": [0, 0]}
      },
      "assets/images/object_vase3.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"vase3": [0, 0]}
      },
      "assets/images/object_concreteblock_lower.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"concreteblock": [0, 0]}
      },

      // Map edge decoration.
      "assets/images/undergroundblock_corner.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"undergroundblock_corner": [0, 0]}
      },
      "assets/images/undergroundblock_right.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"undergroundblock_right": [0, 0]}
      },
      "assets/images/undergroundblock_left.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"undergroundblock_left": [0, 0]}
      },

      // -- Start Interactive stuff -- //
      "assets/images/tile_stairs_down.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"stairs": [0, 0]}
      },
      "assets/images/tile_stairs_up.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"stairs_up": [0, 0]}
      },
      "assets/images/button_unpressed2.png": {
        "tile" : 256,
        "tileh": 140,
        "map": {"button_unpressed": [0, 0]}
      },
      "assets/images/button_pressed2.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"button_pressed": [0, 0]}
      },
      "assets/images/tile_spikes.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_spikes": [0, 0]}
      },
      "assets/images/tile_spikeholes.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_spikeholes": [0, 0]}
      },
      "assets/images/tile_spiketips.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_spiketips": [0, 0]}
      },

      "assets/images/props_scroll.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"props_scroll": [0, 0]}
      },
      "assets/images/props_key.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"props_key": [0, 0]}
      },

      //wall
      "assets/images/leftwall_decorated.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"wallleft": [0, 0]}
      },
      "assets/images/rightwall_decorated.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"wallright": [0, 0]}
      },
      "assets/images/rightwall_decorated_corner.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"wallcenter": [0, 0]}
      },
      "assets/images/player.png": {
        "tile" : 256,
        "tileh": 480,
        "map": {"player": [0, 0]}
      },
      "assets/images/walltorch_left.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"walltorch_left": [0, 0]}
      },
      "assets/images/walltorch_right.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"walltorch_right": [0, 0]}
      },
      
      //start screen
      "assets/images/play_button.png": {
        "tile" : 339,
        "tileh": 130,
         "map": {"play_button": [0, 0]}
      },
      "assets/images/play_mouse.png": {
        "tile" : 339,
        "tileh": 130,
         "map": {"play_mouse": [0, 0]}
      },
      "assets/images/start_screen.png": {
         "tile" : 2250,
         "tileh": 1500,
         "map": {"start_screen": [0, 0]}
      },
      "assets/images/music_on.png": {
         "tile" : 350,
         "tileh": 337,
         "map": {"music_on": [0, 0]}
      },
      "assets/images/music_off.png": {
        "tile" : 350,
        "tileh": 337,
        "map": {"music_off": [0, 0]}
     },

      //end screen
      "assets/images/play_mouse.png": {
        "tile" : 339,
        "tileh": 130,
        "map": {"play_mouse": [0, 0]}
      },
   }
}
