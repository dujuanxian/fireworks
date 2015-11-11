function Canvas () {
	this.canvas = document.getElementById('fireworks');
	this.context = this.canvas.getContext('2d');
	this.canvasWidth = this.canvas.width;
	this.canvasHeight = this.canvas.height;
}

Canvas.prototype.fillBackground =  function() {
	this.context.fillStyle = "#1F2A40";
	this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
	this.context.fill();
	this.context.stroke();	
}

Canvas.prototype.clearCanvas = function () {
  this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  this.context.save();  
}
