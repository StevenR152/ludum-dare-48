Crafty.c("Linked", {
	linkedTo : null,
	linkedTo : function (number) {
		this.linkedTo = number;
	},

	getLinkedNumber : function () {
		return this.linkedTo;
	},

	bindAction : function (actionCallback) {
		this.actionCallback = actionCallback;
	},

	getActionCallback : function() {
		return this.actionCallback;
	}

})
