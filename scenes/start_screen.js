

Crafty.defineScene("Start", function() {

    //background
    var gameStartBackground = Crafty.e("StartBackground");

    //buttons
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_button")
        .attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
        .bind('Click', function(MouseEvent){ Crafty.scene('Game'); })
        .bind('MouseOver', function(e) {
            this.removeComponent("play_button").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
            this.addComponent("play_mouse").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})   
        })
        .bind('MouseOut', function(e) {
            this.addComponent("play_button").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})               
            this.removeComponent("play_mouse").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})               
         });

    var muteMusic = Crafty.e("2D, Color, Mouse, DOM, mute_button");
        muteMusic.attr({x: 30, y: 30, w: 38, h:42, vx:5});
        muteMusic.bind('Click', function(MouseEvent){
            if (audioController.muted == false) {
                audioController.muted = true;
                this.alpha = 0.2;
                audioController.pauseTrack("bgAudio", 0)
            }
            else {
                audioController.muted = false;
                this.alpha = 1;
                audioController.playTrack("bgAudio", -1, 0.25)
            }
        });

    //texts
    var title = Crafty.e("2D, DOM, GameTitle")
        .text("Ludum dare 48")
        .attr({x: GAME_SCREEN_WIDTH/2-80, y: 80});

    var title = Crafty.e("CreditsText")
        .text("Game Art by ")
        .attr({x: 50, y: GAME_SCREEN_HEIGHT-37});

    var title = Crafty.e("CreditsText")
        .text("Game Dev by ")
        .attr({x: 350, y: GAME_SCREEN_HEIGHT-37});

    var title = Crafty.e("CreditsText")
        .text("Game Dev by ")
        .attr({x: 650, y: GAME_SCREEN_HEIGHT-37});
});
