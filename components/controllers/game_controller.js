Crafty.c("GameController", {
    resetGame: function() {
        current_level = 0;
        numberOfResets = 0;
        has_scroll = false;
        passed_guard = false;
        has_cat = false;
        has_key = false;
        totalSeconds = 0;
        all_messages = {};
        isos = Crafty.diamondIso.init(TILE_WIDTH,TILE_HEIGHT,100,100);
        items_to_be_placed =
        [
        	38, 39, 40
        ];

        Crafty.scene('Game');
    }
});
