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
        this.bind("TryUpStairs", function () {
        	this.trigger("InstructionText", "I think the only way is down...deeper");
        })
				this.bind("StartGame", function (e) {
        	this.trigger("InstructionText", "Well, I guess it's time to try and find eternal peace...");
        }),
				this.bind("PLAYER_STOOD_SPIKE", function () {
        	this.trigger("InstructionText", "Note to self...Don't stand on the spikes.");
        }),
				this.bind("DownFloorMessage", function () {
        	this.trigger("InstructionText", "Well... this goes deep... but where is Mafdet?");
        }),
				this.bind("StepButton", function () {
        	this.trigger("InstructionText", "Oooh a button! But what did it do?");
        }),
				this.bind("KeyCollected", function () {
        	this.trigger("InstructionText", "A key! I feel like this will be important later.");
        }),
				this.bind("ScrollCollected", function () {
        	this.trigger("InstructionText", "Hmmm, a scroll? It says -The password is Qwerty1234- Huh?");
        }),
				this.bind("FoundCat", function () {
        	this.trigger("InstructionText", "Mafdet! Yay, I found you! Now Osiris will be able to rest in peace.");
        }),
				this.bind("NoScrollGuard", function () {
        	this.trigger("InstructionText", "Password?");
					this.delay(this.respondGuard1, 1500);
        }),
				this.bind("YourResponse", function () {
        	this.trigger("InstructionText", "Err, I don't have one?");
					this.delay(this.respondGuard2, 1500);
        }),
				this.bind("TheirResponse", function () {
        	this.trigger("InstructionText", "Then, no entry. You need the password first.");
        }),
				this.bind("YesScrollGuard", function () {
        	this.trigger("InstructionText", "Password?");
					this.delay(this.respondGuard3, 1500);
        }),
				this.bind("YourGoodResponse", function () {
        	this.trigger("InstructionText", "Qwerty1234?");
					this.delay(this.respondGuard4, 1500);
        }),
				this.bind("TheirGoodResponse", function () {
        	this.trigger("InstructionText", "Granted. Have a great eternal slumber.");
					Crafty.trigger('WalkPastGuard');
        })
    },

		respondGuard1: function () {
			this.trigger("YourResponse");
		},
		respondGuard2: function () {
			this.trigger("TheirResponse");
		},
		respondGuard3: function () {
			this.trigger("YourGoodResponse");
		},
		respondGuard4: function () {
			this.trigger("TheirGoodResponse");
		}
})
