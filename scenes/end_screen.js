Crafty.defineScene("End", function() {
    var gameStartBackground = Crafty.e("EndBackground");

    //buttons
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_button")
        .attr({x: END_PLAY_BUTTON_XPOS, y: GAME_SCREEN_HEIGHT/2-100, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
        .bind('Click', function(MouseEvent) {
            if (Crafty.audio.isPlaying("bgAudio") == false && audioController.muted == false) {
                audioController.playTrack("bgAudio", -1, 0.25);
            } 
            Crafty.scene('Game'); 
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
    var score = Crafty.e("Score")
        .text("Number of Resets: " + numberOfResets)
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-300});

    var time_taken = Crafty.e("Score")
        .text("Time Elapsed: ")
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-240});


});
