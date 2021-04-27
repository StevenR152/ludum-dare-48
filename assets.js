
//
var gameAssets = {
    "audio": {
	   	"bgAudio" : ["assets/sounds/sand_dune.mp3"],
      "gameOver" : ["assets/sounds/game_over.mp3"],
      "bgIntro" : ["assets/sounds/sand_dune_intro_only.mp3"],
      "spikeDown" : ["assets/sounds/spike_down_low_reverb.mp3"],
      "spikeUp" : ["assets/sounds/spike_up_low_reverb.mp3"],
      "stairsSound" : ["assets/sounds/stone_stairs_low_reverb.mp3"],
      "catSound" : ["assets/sounds/cat_sound.mp3"],
      "scrollSound" : ["assets/sounds/scroll_sound.mp3"],
      "keySound" : ["assets/sounds/key_sound.mp3"],
      "foot_1" : ["assets/sounds/stone_jump_low_reverb_1.mp3"],
      "foot_2" : ["assets/sounds/stone_jump_low_reverb_2.mp3"],
      "foot_3" : ["assets/sounds/stone_jump_low_reverb_3.mp3"],
      "foot_4" : ["assets/sounds/stone_jump_low_reverb_4.mp3"],
      "foot_5" : ["assets/sounds/stone_jump_low_reverb_5.mp3"],
      "foot_6" : ["assets/sounds/stone_jump_low_reverb_6.mp3"],
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
      "assets/images/tile_marble1.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_marble1": [0, 0]}
      },
      "assets/images/tile_marble2.png": {
        "tile" : 256,
        "tileh": 128,
        "map": {"tile_marble2": [0, 0]}
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
      "assets/images/sarcophagus1.png": {
        "tile" : 256,
        "tileh": 543,
        "map": {"sarcophagus": [0, 0]}
      },
      "assets/images/guard.png": {
        "tile" : 256,
        "tileh": 308,
        "map": {"guard": [0, 0]}
      },
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
      "assets/images/object_leverleft.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"lever_left": [0, 0]}
      },
      "assets/images/object_levermiddle.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"lever_middle": [0, 0]}
      },
      "assets/images/object_leverright.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"lever_right": [0, 0]}
      },
      "assets/images/props_scroll.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"props_scroll": [0, 0]}
      },
      "assets/images/props_key.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"props_key": [0, 0]}
      },
      "assets/images/props_cat.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"props_cat": [0, 0]}
      },

      //wall
      "assets/images/object_concreteblock_lower.png": {
        "tile" : 256,
        "tileh": 256,
        "map": {"wallcenter": [0, 0]}
      },

      "assets/images/player.png": {
        "tile" : 256,
        "tileh": 480,
        "map": {
            "player1": [0, 0]
        }
      },
      "assets/images/spritesheet.png": {
        "tile" : 256,
        "tileh": 512,
        "map": {
            "player": [14, 0],
            "PlayerIdle1": [0,0],
            "PlayerLeftFootForward": [0,0],
            "PlayerIdle2": [0,0],
            "PlayerRightFootForward": [9,0]
        }
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
         "tile" : 900,
         "tileh": 600,
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
      "assets/images/playagain_button.png": {
        "tile" : 339,
        "tileh": 130,
         "map": {"play_again": [0, 0]}
      },
      "assets/images/playagain_mouse.png": {
        "tile" : 339,
        "tileh": 130,
         "map": {"play_again_mouse": [0, 0]}
      },
      "assets/images/end_screen.png": {
        "tile" : 900,
        "tileh": 600,
        "map": {"end_screen": [0, 0]}
      },
   }
}
