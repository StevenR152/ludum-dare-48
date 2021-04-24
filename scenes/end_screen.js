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

    var muteMusic = Crafty.e("2D, Color, Mouse, DOM, mute_button")
        .attr({x: 30, y: 30, w: 38, h:42})
        .bind('Click', function(MouseEvent){

        });

    //texts
    var score = Crafty.e("Score")
        .text("Number of Resets: " + numberOfResets)
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-300});

    var time_taken = Crafty.e("Score")
        .text("Time Elapsed: ")
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-240});

   
});