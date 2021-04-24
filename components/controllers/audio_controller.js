Crafty.c("AudioController", {
	// Set me as persistant or global to avoid destruction between scenes
	init: function() {
        this.addComponent("Delay");
		this.muted = false;
    },

    loadTrack : function(trackName, timesToPlay=1, trackVolume=1.0) {
        Crafty.audio.add(trackName);
        //this.playTrack(trackName, timesToPlay, trackVolume);
    },

    playTrack : function(trackName, timesToPlay=1, trackVolume=1.0) {
        Crafty.audio.play(trackName, timesToPlay,trackVolume);
    },

    pauseTrack : function(trackName, timeToPause=0) {
		if (timeToPause != 0) {
			this.delay(function () {
				Crafty.audio.unpause(trackName)
			}, timeToPause, 0)
		}
        Crafty.audio.pause(trackName);
    },

	stopTrack : function(trackName="all") {
		if (trackName == "all") {
			Crafty.audio.stop();
			Crafty.audio.remove() // memory clear
		}
		else {
			Crafty.audio.stop(trackName);
			Crafty.audio.remove(trackName) //memory clear
		}
	},

	muteToggle : function() {
		//pretty self explanatory - does this need to be here?
		Crafty.audio.toggleMute()
	}
})
