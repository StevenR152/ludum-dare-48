Crafty.c("PlayerNotification", {
	init: function() {
        this.requires('2D, DOM, Text, Delay, Keyboard')
        this.totalSeconds = 0;
        this.attr({w: 200, h: 100, x: -60, y: -35})
        this.z = 1000;
        // HashSet of Messages Received to only notify once.
        this.messagesReceived = {};
        this.textAlign("center");
        // this.css('text-shadow', '2px 2px 5px white')
        this.textColor('#555');
        this.unselectable();
        this.textFont({ size: '11px', weight: "bold" });
        this.bind("InstructionText", function (message) {
            if(this.messagesReceived[message] != "SEENBEFORE"){
                this.text(message);
                this.alpha = 1.3;
                this.delay(this.decayMessage, 200, this.alpha/0.1);
            }
            this.messagesReceived[message] = "SEENBEFORE";

        }.bind(this))
        this.setMessageEvents();
        Crafty.trigger("InstructionText", "Arrow keys to move")
    },

    decayMessage: function() {
        this.alpha -= 0.1;
        return this;
    },

    setMessageEvents: function () {
        this.bind("KeyDown", function () {
            this.delay(function () {
                Crafty.trigger("InstructionText", "Go find your bucket")
            }, 1000, -1)
        })

        this.bind("collectBucket", function() {
            this.delay(function () {
               Crafty.trigger("InstructionText", "Catch some raindrops")
            }, 1000, -1)
        })

        this.bind("getPoo", function() {
            Crafty.trigger("InstructionText", "Fertilise the tree")
        }) 


        this.bind("bucketFull", function() {
            Crafty.trigger("InstructionText", "Water the tree")
        })

        this.bind("emptyBucket", function() {
            Crafty.trigger("InstructionText", "You help keep it alive!")
        })


        this.bind("PlayerLeavingGameZone", function() {
            console.log("PlayerLeavingGameZone");
            Crafty.trigger("InstructionText", "Return to the game area")
        })

        this.bind("PlayerLeftGameZone", function() {
            Crafty.trigger("InstructionText", "You have left the game area")
            console.log("PlayerLeftGameZone");

            this.delay(function () {
                Crafty.scene("EndScreen", statistics)
            }, 2000, -1)
        })
    }
})
