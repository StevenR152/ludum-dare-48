Crafty.c("PlayerNotification", {
	init: function() {
        this.requires('2D, DOM, Text, Delay')
        this.totalSeconds = 0;
        this.attr({w: 300, h: 100, x: 500, y: -50})
        this.z = 2000;
        // HashSet of Messages Received to only notify once.
        this.messagesReceived = {};
        this.textAlign("center");
        //this.css('text-shadow', '2px 2px 5px white')
        this.textColor('#724108');
        this.unselectable();
        this.textFont({ size: '50px', weight: "bold", family : "Garamond"});
        this.bind("InstructionText", function (message) {
            if(this.messagesReceived[message] != "SEENBEFORE"){
                this.text(message);
                this.alpha = 1.3;
                this.delay(this.decayMessage, 200, this.alpha/0.1);
            }
            this.messagesReceived[message] = "SEENBEFORE";

        }.bind(this))
        this.setMessageEvents();
    },

    decayMessage: function() {
        this.alpha -= 0.1;
        return this;
    },

    setMessageEvents: function () {
        this.bind("TryUpStairs", function () {
        	Crafty.trigger("InstructionText", "The only way is down...");
					console.log("hello");
        })
    }
})
