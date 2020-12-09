export class Character {
	public sprite: HTMLImageElement;
	private cycleLoop = [0, 1, 0, 2];
	private currentLoopIndex = 0;
	private x: number;
	private y: number;
	private height: number;
	private width: number;
	private scaledWidth: number;
	private scaledHeight: number;
	constructor(x: number, y: number, height: number, width: number, sprite: string, scale: number) {
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.scaledWidth = scale * width;
		this.scaledHeight = scale * height;
		this.sprite = this.loadSprite(sprite);
	}

	public draw(context: CanvasRenderingContext2D, direction: number, canvasX: number, canvasY: number): void {
		context.drawImage(
			this.sprite,
			this.cycleLoop[this.currentLoopIndex] * this.width,
			direction * this.height,
			this.width,
			this.height,
			canvasX,
			canvasY,
			this.scaledWidth,
			this.scaledHeight
		);
		this.currentLoopIndex++;
		if (this.currentLoopIndex >= this.cycleLoop.length) {
			this.currentLoopIndex = 0;
		}
	}

	private loadSprite(url: string): HTMLImageElement {
		const img = new Image();
		img.src = url;
		return img;
	}
}
