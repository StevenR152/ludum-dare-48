Crafty.c("MusicIcon", {
    init: function(){
        this.addComponent('2D, Color, Mouse, DOM, HUD, music_on')
        this.bind('Click', function(e){
            if (audioController.muted == false) {
                audioController.muted = true;
                audioController.pauseTrack("bgAudio", 0)
                this.addComponent("music_off")              
                this.removeComponent("music_on")
            }
            else {
                audioController.muted = false;
                audioController.playTrack("bgAudio", -1, 0.25)
                this.addComponent("music_on")
                this.removeComponent("music_off")
            }
        });
    }
});
