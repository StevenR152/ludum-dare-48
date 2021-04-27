Crafty.c("HudCollectibles", {
    
    init: function() {
        this.cat = Crafty.e("item_cat")
            .attr({x: GAME_MUSIC_BUTTON_XPOS, y: GAME_MUSIC_BUTTON_YPOS, w: PROPS_WIDTH * 2, h: PROPS_HEIGHT * 2})
            .fixedPosition(GAME_MUSIC_BUTTON_XPOS, GAME_MUSIC_BUTTON_YPOS)
        this.cat.alpha = 0.5;

        this.key = Crafty.e("item_key")
			.attr({x: GAME_MUSIC_BUTTON_XPOS + 220, y: GAME_MUSIC_BUTTON_YPOS - 10, w: PROPS_WIDTH * 2, h: PROPS_HEIGHT * 2})
            .fixedPosition(GAME_MUSIC_BUTTON_XPOS + 220, GAME_MUSIC_BUTTON_YPOS - 10)
        this.key.alpha = 0.5;

        this.scroll = Crafty.e("item_scroll")
			.attr({x: GAME_MUSIC_BUTTON_XPOS + 320, y: GAME_MUSIC_BUTTON_YPOS - 10, w: PROPS_WIDTH * 2, h: PROPS_HEIGHT * 2})
            .fixedPosition(GAME_MUSIC_BUTTON_XPOS + 320, GAME_MUSIC_BUTTON_YPOS - 10)
        this.scroll.alpha = 0.5;
     

    },

    update: function() {
        if(has_cat) {
            this.cat.alpha = 1;
        }

        if(has_key) {
            this.key.alpha = 1;
        }

        if(has_scroll) {
            this.scroll.alpha = 1;
        }
    },

    reset: function() {
        this.cat.alpha = 0.5;
        this.key.alpha = 0.5;
        this.scroll.alpha = 0.5;
    }
});