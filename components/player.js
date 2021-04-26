Crafty.c("Player", {
	init: function() {
		// this.direction_force = 0
		// this.force_level_x = 0
		var passed_guard = false;
    this.step = "l";
    this.isInputFrozen = false;
		this.holding_key = false; //holding down a keyboard key
		// this.has_key = false; // has a key for the door
    this.animation_reel = "walking_down_right_r";
    this.addComponent("2D, DOM, Color, Destroyable, Collision, Keyboard, SpriteAnimation, player, Delay");

    this.reel("walking_down_left_l", 1000, [
      [0, 0], [1, 0], [2, 0], [3, 0],[4, 0], [5, 0], [6, 0],[7, 0], [8, 0], [9, 0]]);
    this.reel("walking_down_left_r", 1000, [
      [10, 0], [11, 0], [12, 0], [13, 0],[14, 0], [15, 0], [16, 0],[17, 0], [18, 0], [19, 0]]);
    this.reel("walking_down_left_idle", 2000, [
      [20, 0], [21, 0], [22, 0], [23, 0],[24, 0], [25, 0], [26, 0],[27, 0], [28, 0], [29, 0], [30, 0], [31, 0], [32, 0], [33, 0],[34, 0], [35, 0], [36, 0],[37, 0], [38, 0], [39, 0]]);

    this.reel("walking_up_right_idle", 1000, [
       [20, 1], [21, 1], [22, 1], [23, 1],[24, 1], [25, 1], [26, 1],[27, 1], [28, 1], [29, 1], [30, 1], [31, 1], [32, 1], [33, 1],[34, 1], [35, 1], [36, 1],[37, 1], [38, 1], [39, 1]]);
    this.reel("walking_up_right_l", 1000, [
       [0, 1], [1, 1], [2, 1], [3, 1],[4, 1], [5, 1], [6, 1],[7, 1], [8, 1], [9, 1]]);
    this.reel("walking_up_right_r", 2000, [
       [0, 1], [1, 1], [2, 1], [3, 1],[4, 1], [5, 1], [6, 1],[7, 1], [8, 1], [9, 1]]);

		this.reel("walking_up_left_l", 1000, [
	     [40, 0], [40, 0], [42, 0], [43, 0],[44, 0], [45, 0], [46, 0],[47, 0], [48, 0], [49, 0]]);
	  this.reel("walking_up_left_r", 1000, [
	     [50, 0], [50, 0], [52, 0], [53, 0],[54, 0], [55, 0], [56, 0],[57, 0], [58, 0], [59, 0]]);
		this.reel("walking_up_left_idle", 2000, [
	 	   [60, 0], [61, 0], [62, 0], [63, 0],[64, 0], [65, 0], [66, 0],[67, 0], [68, 0], [69, 0], [70, 0], [71, 0], [72, 0], [73, 0],[74, 0], [75, 0], [76, 0],[77, 0], [78, 0], [79, 0]]);

		this.reel("walking_down_right_l", 1000, [
 	     [40, 1], [40, 1], [42, 1], [43, 1],[44, 1], [45, 1], [46, 1],[47, 1], [48, 1], [49, 1]]);
 	  this.reel("walking_down_right_r", 1000, [
 	     [50, 1], [50, 1], [52, 1], [53, 1],[54, 1], [55, 1], [56, 1],[57, 1], [58, 1], [59, 1]]);
 		this.reel("walking_down_right_idle", 2000, [
 	 	   [60, 1], [61, 1], [62, 1], [63, 1],[64, 1], [65, 1], [66, 1],[67, 1], [68, 1], [69, 1], [70, 1], [71, 1], [72, 1], [73, 1],[74, 1], [75, 1], [76, 1],[77, 1], [78, 1], [79, 1]]);

    this.reel("idle", 2000, [
      [20, 0], [21, 0], [22, 0], [23, 0], [24, 0],[25, 0], [26, 0], [27, 0],[28, 0], [29, 0],[30, 0], [31, 0], [32, 0], [33, 0], [34, 0],[35, 0], [36, 0], [37, 0],[38, 0], [39, 0]]);

    this.animate("idle", -1);
    this.attr({
          posx : 1,
          posy : 50,
          w : 256,
          h : 480,
    })
    this.bind('KeyUp', function(e) {
        this.delay(function () {
					var string = this.animation_reel.slice(0, -1);
					string += "idle";
          this.animate(string, -1) // this.animation_reel + "_idle"
        }.bind(this), 450, 0);
    })
    this.bind('KeyDown', function(e) {
      if(this.isInputFrozen) return;
      var direction = {};

			if (this.step === "r") {
				this.step = "l";
			} else {
				this.step = "r";
			}

      if(e.key == Crafty.keys.LEFT_ARROW) {
        direction = {x : -1, y : 0};
        this.animate("walking_up_left_"+this.step, -1);
        this.animation_reel = "walking_up_left_"+this.step;
      } else if(e.key == Crafty.keys.RIGHT_ARROW) {
				direction = {x : 1, y : 0};
        this.animate("walking_down_right_"+this.step, -1);
        this.animation_reel = "walking_down_right_"+this.step;
      } else if(e.key == Crafty.keys.UP_ARROW) {
        this.animate("walking_up_right_"+this.step, -1); // DONE
        this.animation_reel = "walking_up_right_"+this.step;
				direction = {x : 0, y : -1};
      } else if(e.key == Crafty.keys.DOWN_ARROW) {
        this.animate("walking_down_left_"+this.step, -1);
				this.animation_reel = "walking_down_left_"+this.step;


				direction = {x : 0, y : 1};
      } else if(e.key == Crafty.keys.SPACE) {
        this.actionAnythingInRange();
        return;
      }
      this.undoLastMove = this.invertDirection(direction);
      Crafty.trigger("PlayerMovement", direction);
    });

    this.bind("PLAYER_STOOD_SPIKE", function () {
      Crafty.trigger("PlayerMovement", this.undoLastMove);
      this.isInputFrozen = false;
    });

    this.bind("PLAYER_FROZEN", function () {
      this.isInputFrozen = true;
    });
		this.bind('WalkPastGuard', function() {
			this.posx = 1;
			this.posy = 20;
			isos.place(this, this.posx, this.posy, 1);
		});
    this.bind('PlayerMovement', function(e) {
        var newy = this.posy+e.y-1;
        var newx = this.posx+e.x-1;

      // walked outside of map, don't allow it.
        if(newy < 0 || newx < 0 || newy >= map[current_level][0].length || newx >= map[current_level][0][newy].length) {
          return;
      }

      // stairs down
      if (map[current_level][1][newy][newx] === 8) {
        if(newy < 0 || newx <= 0 || newy >= map[current_level+1][0].length || newx >= map[current_level+1][0][newy].length) {
          this.posx += e.x;
          this.posy += e.y + 1;
        }
        else {
          this.posx += e.x + 1;
          this.posy += e.y;
        }
        Crafty.trigger("GoDownAFloor", {});
        return;
      }

      // Stairs up
      if (map[current_level][1][newy][newx] === 9) {
        if(newy < 0 || newx <= 0 || newy >= map[current_level-1][0].length || newx >= map[current_level-1][0][newy].length) {
          this.posx += e.x +1 ;
          this.posy += e.y;
        }
        else {
          this.posx += e.x -1 ;
          this.posy += e.y;
        }
        Crafty.trigger("GoUpAFloor", {});
				// Crafty.trigger("TryUpStairs", {});
        return;
      }

			if (map[current_level][1][newy][newx] === 38) {
				// you got a key
				Crafty.trigger("KeyCollected", {});
				audioController.playTrack("key", 1, 0.6);
				has_key = true;
			}

			if (map[current_level][1][newy][newx] === 39) {
				// you got a scroll
				Crafty.trigger("ScrollCollected", {});
				audioController.playTrack("scroll", 1, 0.6);
				has_scroll = true;
			}

			if (map[current_level][1][newy][newx] === 40) {
				// you got a cat
				Crafty.trigger("FoundCat", {});
				audioController.playTrack("cat", 1, 0.6);
				has_cat = true;
			}

			if (map[current_level][1][newy][newx] === 55) {
				// you found the guard
				if (has_scroll === true && passed_guard === false) {
					passed_guard = true;
					Crafty.trigger("YesScrollGuard", {});
					return;
				}
				else if (passed_guard === false) {
					Crafty.trigger("NoScrollGuard", {});
					return;
				} else {
					return;
				}
			}

      // Pillar and other solid objects
      if (map[current_level][1][newy][newx] > 10 &&
          map[current_level][1][newy][newx] < 20) {
        return;
      }

			// Holes!
      if (map[current_level][0][newy][newx] === 0) {
        return;
      }

			// The magical sarcophagus
			if (map[current_level][1][newy][newx] === 50) {
				Crafty.trigger("FoundSarcophagusNoCat", {});
				if (has_cat === true) {
					Crafty.trigger("FoundSarcophagusCat", {});
				}
        return;
      }

      // if we haven't returned already, we must be able to move there.
      this.posx += e.x;
      this.posy += e.y;
			var footstep_sound = Math.floor(Math.random()*footstep_sounds.length);
			var step = footstep_sounds[footstep_sound];
			audioController.playTrack(step, 1, 0.1);
      isos.place(this, (this.posx), (this.posy), 1);

      return;
    });

    // ------- Hitbox under the Mummys feet ------- //
    this.hitbox = Crafty.e("2D, Color, DOM, Collision, PlayerHitbox");
    // this.hitbox.color("red");
    this.hitbox.attr({
      w:96,
      h:48,
      x:128-48-5,
      y:480-24-70, // mummy height - half hitbox height - extra to move to feet of mummy.
      z:4000
    });
    this.attach(this.hitbox)
  },
// init() done

  invertDirection : function (direction) {
    return {x : -1* direction.x, y: -1 * direction.y}
  },

  actionAnythingInRange : function () {
    var hits = this.hitbox.hit("LeverHitBox");
    if(!hits) return;
    for (var i = 0; i < hits.length; i++) {
      var obj = hits[i].obj;
      Crafty.trigger("PLAYER_TRIGGERED_LEVER")
    }
  }
})
