Crafty.defineScene("End", function() {
    var gameStartBackground = Crafty.e("EndBackground");
    audioController.stopTrack();
    audioController.playTrack("gameOver", 1, 0.25);
    audioController.delay(function() {audioController.playTrack("bgIntro", -1, 0.10)}, 8000);

    //buttons
    var playAgainGameButton = Crafty.e("2D, DOM, Image, Mouse, play_again")
        .attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
        .bind('Click', function(MouseEvent) {
            if (Crafty.audio.isPlaying("bgAudio") == false && audioController.muted == false) {
                audioController.stopTrack();
                audioController.playTrack("bgAudio", -1, 0.10);
            }

            gameController.resetGame();
        })
        .bind('MouseOver', function(e) {
            this.removeComponent("play_again").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
            this.addComponent("play_again_mouse").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
        })
        .bind('MouseOut', function(e) {
            this.addComponent("play_again").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
            this.removeComponent("play_again_mouse").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
         });

    Crafty.e("MusicIcon")
        .attr({x: MUSIC_BUTTON_XPOS, y: MUSIC_BUTTON_YPOS, w: MUSIC_BUTTON_WIDTH, h: MUSIC_BUTTON_HEIGHT})
        .fixedPosition(MUSIC_BUTTON_XPOS, MUSIC_BUTTON_YPOS)
        .initClick(MUSIC_BUTTON_XPOS, MUSIC_BUTTON_YPOS, MUSIC_BUTTON_WIDTH, MUSIC_BUTTON_HEIGHT)

    //achievements
    Crafty.e("Score")
        .text("Collected")
        .attr({x: END_PLAY_BUTTON_XPOS - 30, y: END_PLAY_BUTTON_YPOS + 90});

    if(has_cat)
        Crafty.e("2D, DOM, Color, props_cat").attr({x: END_PLAY_BUTTON_XPOS + 40, y: END_PLAY_BUTTON_YPOS + 130, w: PROPS_WIDTH, h: PROPS_HEIGHT})

    if(has_key)
        Crafty.e("2D, DOM, Color, props_key").attr({x: END_PLAY_BUTTON_XPOS + 40, y: END_PLAY_BUTTON_YPOS + 170, w: PROPS_WIDTH, h: PROPS_HEIGHT})

    if(passed_guard)
        Crafty.e("2D, DOM, Color, props_scroll").attr({x: END_PLAY_BUTTON_XPOS + 40, y: END_PLAY_BUTTON_YPOS + 210, w: PROPS_WIDTH, h: PROPS_HEIGHT})



    var time_taken = Crafty.e("Score")
        .text("Time Spent Exploring: " + timer.text)
        .attr({x: END_PLAY_BUTTON_XPOS - 80, y: GAME_SCREEN_HEIGHT-240, w: 300});


});
