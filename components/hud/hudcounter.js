Crafty.c("HudCounter", {
    init : function () {
        this.requires('2D, DOM, Text, Delay, HUD')
        this.attr({w: 65, h: 100, x: 0, y: 0})
        this.z = 1000;
        this.text("00:00");
        this.css('text-shadow', '1px 1px 1px black');
        this.textColor('#EEE');
        this.unselectable();
        this.delay(this.updateTimer, 1000, -1);
        this.textFont({ size: '17px', weight: 'bold', family : "Garamond"});
    },

    updateTimer : function () {
        //calculate time
        totalSeconds += 1;
        var minutes = parseInt(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        if (totalSeconds <= 0) {
            if(typeof this.countdownOver !== 'undefined') {
                this.countdownOver();
            }
        }

        gametime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)
        //update time text
        this.text = gametime;
        timetext.text(gametime)
    },

    setCountdownOverAction : function (func) {
        this.countdownOver = func;
    },

    getTotalSeconds: function () {
        return this.totalSeconds;
    },

    getTimeText: function () {
        return this.text;
    }
});
