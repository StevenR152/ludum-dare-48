Crafty.c("Lever", {
  init: function() {
    this.addComponent("2D, Tile, Destroyable, Collision, DOM, Color, Keyboard, LinkMechanism, lever_middle");
    this.hitbox = Crafty.e("CentralHitbox");
    this.attach(this.hitbox);
    this.timesPressed = 0;
    this.states = ["lever_middle", "lever_right", "lever_middle", "lever_left"];
    this.hitbox.w = 120;
    this.hitbox.h = 120;
    this.hitbox.y = 0;
    this.hitbox.x = 0;
    this.hitbox.z = 120;
    this.hitbox.rotation = 45;
    this.z = 121;
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

    this.bind("PLAYER_TRIGGERED", function () {
        this.triggerLever()
    })
  },
});