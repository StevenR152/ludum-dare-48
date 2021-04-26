Crafty.c("Lever", {
  init: function() {
    this.addComponent("2D, Tile, Destroyable, Collision, DOM, Color, Keyboard, LinkMechanism, lever_middle");
    this.hitbox = Crafty.e("CentralHitbox, LeverHitBox");
    this.attach(this.hitbox);
    this.timesPressed = 0;
    this.states = ["lever_middle", "lever_right", "lever_middle", "lever_left"];
    // The hitbox is a rectangle that covers the tile of the lever, and the 4 adjacent tiles
    // this allows the player to trigger it from a touching tile.
    this.hitbox.w = 360;
    this.hitbox.h = 170;
    this.hitbox.y = 100;
    this.hitbox.x = -60;
    this.hitbox.z = 120;
    // this.hitbox.color("red");
    this.triggerLever = function() {
      // TODO Play Lever press sound here
      // TODO play a mechanism sound here for the trap going off?

      this.removeComponent("lever_left");
      this.removeComponent("lever_middle");
      this.removeComponent("lever_right");
      this.timesPressed += 1;
      this.addComponent(this.states[this.timesPressed % this.states.length]);

      // think actions on anything this Lever is linked to.
      this.triggerLinks();
    };

    this.bind("PLAYER_TRIGGERED_LEVER", function () {
        this.triggerLever()
    })
  },
});