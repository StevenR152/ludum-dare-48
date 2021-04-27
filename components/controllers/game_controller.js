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
        map = [];

        if(!cat) {
            cat = Crafty.e("item_cat")
            .attr({x: GAME_MUSIC_BUTTON_XPOS + 100, y: GAME_MUSIC_BUTTON_YPOS, w: PROPS_WIDTH * 2, h: PROPS_HEIGHT * 2})
            .fixedPosition(GAME_MUSIC_BUTTON_XPOS + 100, GAME_MUSIC_BUTTON_YPOS)
        }

        if(!key) {
            key = Crafty.e("item_key")
            .attr({x: GAME_MUSIC_BUTTON_XPOS + 220, y: GAME_MUSIC_BUTTON_YPOS - 10, w: PROPS_WIDTH * 2, h: PROPS_HEIGHT * 2})
            .fixedPosition(GAME_MUSIC_BUTTON_XPOS + 220, GAME_MUSIC_BUTTON_YPOS - 10)
        }

        if(!hud_scroll) {
            hud_scroll = Crafty.e("item_scroll")
            .attr({x: GAME_MUSIC_BUTTON_XPOS + 320, y: GAME_MUSIC_BUTTON_YPOS - 10, w: PROPS_WIDTH * 2, h: PROPS_HEIGHT * 2})
            .fixedPosition(GAME_MUSIC_BUTTON_XPOS + 320, GAME_MUSIC_BUTTON_YPOS - 10)
        }

        cat.setAlpha(0.4);
        key.setAlpha(0.4);
        hud_scroll.setAlpha(0.4);
        Crafty.scene('Game');
    }
});
