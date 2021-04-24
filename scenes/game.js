Crafty.defineScene("Game", function() {
	
	// var redSquare = Crafty.e('2D, DOM, Color')
	// 	.attr({x: 0, y: 0, w: 100, h: 100})
	// 	.color('#F00');

	var isos = Crafty.diamondIso.init(194,135,20,20);
	for (var y = 0; y < 20; y++) {
		for (var x = 0; x < 20; x++) {
			isos.place(Crafty.e('2D, DOM, Color, tile').attr({w:194, h:135}),x+2,y-2,0);
		}
	}
});