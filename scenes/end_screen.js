Crafty.defineScene("End", function() {
    var gameStartBackground = Crafty.e("EndBackground");

    //buttons
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_again_button")
        .attr({
            x: GAME_SCREEN_WIDTH/2-65,
            y: GAME_SCREEN_HEIGHT/2-100,
            w: 141,
            h: 51
        })
        .bind('Click', function(MouseEvent){
            numberOfResets = 0;
            Crafty.scene('Game');
        });

    Crafty.e("MusicIcon")
		.attr({x: MUSIC_BUTTON_XPOS, y: MUSIC_BUTTON_YPOS, w: MUSIC_BUTTON_WIDTH, h: MUSIC_BUTTON_HEIGHT})
		.initClick(MUSIC_BUTTON_XPOS, MUSIC_BUTTON_YPOS, MUSIC_BUTTON_WIDTH, MUSIC_BUTTON_HEIGHT)

    //texts
    var score = Crafty.e("Score")
        .text("Number of Resets: " + numberOfResets)
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-300});

    var time_taken = Crafty.e("Score")
        .text("Time Elapsed: ")
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-240});


});
