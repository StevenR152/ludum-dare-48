Crafty.c('LightSource', {

	LightSource: function(source, radius, color, shouldFlash) {
		this.requires('Delay');

		this.source = source;
		this.origRadius = this.radius = radius;
		this.origX = this.x;
		this.origY = this.y;
		this.w = this.h = this.radius * 2;
		this.color = color;
		this.flashrate = 0.2;

		if (shouldFlash) {
			this.flash();
		}

		// this.shadows = Crafty.e('2D, Canvas, Shadows').Shadows(this.source, radius);
		// this.attach(this.shadows);

		return this;
	},

	flash: function() {
		var amt = Math.random();
		this.flashrate = 1.3 + 0.3 * amt;
		var diff = this.origRadius/32 + amt*this.origRadius/16;
		this.radius = this.origRadius - diff;
		this.x = this.origX + diff;
		this.y = this.origY + diff;

		var self = this; //todo use bind.
		this.delay(function() { self.flash(); }, 100 + 400 * Math.random());
	},

	draw: function() {
		// set flag that darkness needs to be refreshed on next frame
		screenComponentsGame.needRedrawDarkness = true;

		var ctx = screenComponentsGame.darkscreen.getContext('2d');
		// light
		// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
		ctx.globalCompositeOperation = 'source-atop';
		var radialgradient = ctx.createRadialGradient(this.x + this.radius, this.y + this.radius, this.radius/8, this.x + this.radius, this.y + this.radius, this.radius);
		radialgradient.addColorStop(0, 'rgba(' + this.color + ',' + this.flashrate.toFixed(2) + ')');
		radialgradient.addColorStop(1, 'rgba(' + this.color + ',0)');

		ctx.fillStyle = radialgradient;
		ctx.beginPath();
		ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, Math.PI*2, false);
		ctx.closePath();
		ctx.fill();

		// back to default
		ctx.globalCompositeOperation = "source-over";
	}
});