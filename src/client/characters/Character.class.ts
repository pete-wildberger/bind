export class Character {
	public sprite: HTMLImageElement;
	private x: number;
	private y: number;
	private height: number;
	private width: number;
	constructor(x: number, y: number, height: number, width: number, sprite: string) {
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.sprite = this.loadSprite(sprite);
	}

	public draw(context: CanvasRenderingContext2D): void {
		context.drawImage(this.sprite, 0, 0, this.height, this.width, this.x, this.y, this.height, this.width);
	}

	private loadSprite(url: string): HTMLImageElement {
		const img = new Image();
		img.src = url;
		return img;
	}
}
