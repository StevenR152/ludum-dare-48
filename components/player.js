Crafty.c("Player", {
	init: function() {
		// this.direction_force = 0
		// this.force_level_x = 0
    var leftstep = true; 
    this.isInputFrozen = false;
		this.holding_key = false; //holding down a keyboard key
		// this.has_key = false; // has a key for the door

    this.addComponent("2D, DOM, Color, Destroyable, Collision, Keyboard, SpriteAnimation, player, Delay");

    this.reel("walking_down_r", 500, [
      [0, 0], [1, 0], [2, 0], [3, 0],[4, 0], [5, 0], [6, 0],[7, 0], [8, 0], [9, 0]]);
    this.reel("walking_down_l", 500, [
       [10, 0], [11, 0], [12, 0], [13, 0],[14, 0], [15, 0], [16, 0],[17, 0], [18, 0], [19, 0]]);

    this.reel("idle", 1000, [
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
             this.animate("idle", -1)
        }.bind(this), 450, 0);
    })
    this.bind('KeyDown', function(e) {
      if(this.isInputFrozen) return;
      var direction = {};
      if(e.key == Crafty.keys.LEFT_ARROW) {
        direction = {x : -1, y : 0};
        this.animate("walking_down_l", -1);
      } else if(e.key == Crafty.keys.RIGHT_ARROW) {
				direction = {x : 1, y : 0};
        this.animate("walking_down_l", -1);
      } else if(e.key == Crafty.keys.UP_ARROW) {
        this.animate("walking_down_l", -1);
				direction = {x : 0, y : -1};
      } else if(e.key == Crafty.keys.DOWN_ARROW) {
        this.animate("walking_down_l", -1);
      
				direction = {x : 0, y : 1};
      }
      this.undoLastMove = this.invertDirection(direction);
      Crafty.trigger("PlayerMovement", direction);
      //   this.delay(function () {
      //        this.animate("idle", -1)
      //   }.bind(this), 450, 0);

    });

    this.bind("PLAYER_STOOD_SPIKE", function () {
      Crafty.trigger("PlayerMovement", this.undoLastMove);
      this.isInputFrozen = false;
    })

    this.bind("PLAYER_FROZEN", function () {
      this.isInputFrozen = true;
    })

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
        // if(newy < 0 || newx <= 0 || newy >= map[current_level-1][0].length || newx >= map[current_level-1][0][newy].length) {
        //   this.posx += e.x +1 ;
        //   this.posy += e.y;
        // }
        // else {
        //   this.posx += e.x -1 ;
        //   this.posy += e.y;
        // }
        // Crafty.trigger("GoUpAFloor", {});
				Crafty.trigger("TryUpStairs", {});
        return;
      }

      // Pillar and other solid objects
      if (map[current_level][1][newy][newx] > 10 &&
          map[current_level][1][newy][newx] < 20) {
        return;
      }

      // if we haven't returned already, we must be able to move there.
      this.posx += e.x;
      this.posy += e.y;
      isos.place(this, (this.posx), (this.posy), 1);
      return;
    });

    // ------- Hitbox under the Mummys feet ------- //
    this.hitbox = Crafty.e("2D, Color, DOM, Collision, PlayerHitbox");
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
  goIdle : function (ms) {
      sleep(ms);
      this.animate("idle", -1);
      }

})
