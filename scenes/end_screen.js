Crafty.defineScene("End", function() {
    var gameStartBackground = Crafty.e("EndBackground");
    audioController.stopTrack();
    audioController.playTrack("gameOver", 1, 0.25);
    audioController.delay(function() {audioController.playTrack("bgIntro", -1, 0.10)}, 8000);

    //buttons
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_button")
        .attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
        .bind('Click', function(MouseEvent) {
            if (Crafty.audio.isPlaying("bgAudio") == false && audioController.muted == false) {
                audioController.stopTrack();
                audioController.playTrack("bgAudio", -1, 0.10);
            }
            
            Crafty.e("GameController").resetGame();
        })
        .bind('MouseOver', function(e) {
            this.removeComponent("play_button").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
            this.addComponent("play_mouse").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
        })
        .bind('MouseOut', function(e) {
            this.addComponent("play_button").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
            this.removeComponent("play_mouse").attr({x: END_PLAY_BUTTON_XPOS, y: END_PLAY_BUTTON_YPOS,
                w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
         });

    Crafty.e("MusicIcon")
        .attr({x: MUSIC_BUTTON_XPOS, y: MUSIC_BUTTON_YPOS, w: MUSIC_BUTTON_WIDTH, h: MUSIC_BUTTON_HEIGHT})
        .fixedPosition(MUSIC_BUTTON_XPOS, MUSIC_BUTTON_YPOS)
        .initClick(MUSIC_BUTTON_XPOS, MUSIC_BUTTON_YPOS, MUSIC_BUTTON_WIDTH, MUSIC_BUTTON_HEIGHT)

    //texts
    var time_taken = Crafty.e("Score")
        .text("Time Elapsed: " + timer.text)
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-240});


});
