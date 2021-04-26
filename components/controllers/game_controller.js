Crafty.c("GameController", {
    resetGame: function() {
        current_level = 6;
        numberOfResets = 0;

        Crafty.scene('Game');
    }
});
