Crafty.c("PlayerNotification", {
	init: function() {
        this.requires('2D, DOM, Text, Delay')
        this.totalSeconds = 0;
        this.attr({w: 500, h: 200})
        this.z = 2000;
        // HashSet of Messages Received to only notify once.
        this.messagesReceived = {};
        this.textAlign("center");
        this.css('text-shadow', '1px 1px 3px black')
        this.textColor('#724108');
        this.unselectable();
        this.textFont({ size: '60px', weight: "bold", family : "Garamond"});
        this.bind("InstructionText", function (message) {
            if(this.messagesReceived[message] != "SEENBEFORE"){
                this.text(message);
                this.alpha = 1.3;
                this.delay(this.decayMessage, 500, this.alpha/0.1);
            }
            this.messagesReceived[message] = "SEENBEFORE";
						all_messages = this.messagesReceived;

        }.bind(this))
        this.setMessageEvents();
    },

    decayMessage: function() {
        this.alpha -= 0.1;
        return this;
    },

    setMessageEvents: function () {
        Crafty.bind("TryUpStairs", function () {
        	this.trigger("InstructionText", "I think the only way is down...deeper");
        })
				Crafty.bind("StartGame", function (e) {
					console.log("ok");
        	this.trigger("InstructionText", "Well, I guess it's time to try and find eternal peace...");
        }),
				Crafty.bind("PLAYER_STOOD_SPIKE", function () {
        	this.trigger("InstructionText", "Note to self...Don't stand on the spikes.");
        }),
				Crafty.bind("DownFloorMessage", function () {
        	this.trigger("InstructionText", "Well... this goes deep... but where is Mafdet?");
        }),
				Crafty.bind("StepButton", function () {
        	this.trigger("InstructionText", "Oooh a button! But what did it do?");
        }),
				Crafty.bind("KeyCollected", function () {
        	this.trigger("InstructionText", "A key! I feel like this will be important later.");
        }),
				Crafty.bind("ScrollCollected", function () {
        	this.trigger("InstructionText", "Hmmm, a scroll? It says -The password is Qwerty- Huh?");
        }),
				Crafty.bind("FoundCat", function () {
        	this.trigger("InstructionText", "Mafdet! Yay, I found you! Now Osiris will be able to rest in peace.");
        })
    }
})
