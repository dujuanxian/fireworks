function Fireworks () {
	this.canvas = new Canvas();
}

Fireworks.prototype.run = function() {
	this.canvas.clearCanvas();
	this.canvas.fillBackground();
}