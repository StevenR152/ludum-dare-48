Crafty.c("StatsHudCounter", {
    init : function () {
        this.requires('2D, DOM, Text, Delay')
        this.attr({w: 65, h: 100, x: 0, y: 0})
        this.z = 1000;
        this.text("00:00")
        this.css('text-shadow', '1px 1px 1px black')
        this.textColor('#EEE');
        this.unselectable()
        this.textFont({ size: '35px', weight: 'bold' });
    },

    updateTimer : function () {
        //calculate time
        var minutes = parseInt(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        if (totalSeconds <= 0) {
            if(typeof this.countdownOver !== 'undefined') {
                this.countdownOver();
            }
        }

        gametime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)
        //update time text
        this.text(gametime);
    },

    setCountdownOverAction : function (func) {
        this.countdownOver = func;
    },

    getTotalSeconds: function () {
        return this.totalSeconds;
    }
});
