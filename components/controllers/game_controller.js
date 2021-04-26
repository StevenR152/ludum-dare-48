Crafty.c("GameController", {
    resetGame: function() {
        current_level = 0;
        numberOfResets = 0;

        Crafty.scene('Game');
    }
});
