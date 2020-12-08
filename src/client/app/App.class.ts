export class App {
	private context: CanvasRenderingContext2D;
	constructor() {
		const canvas = this.setCanvas();
		this.context = this.setContext(canvas);
	}

	private setCanvas(): HTMLCanvasElement {
		const canvas = document.getElementById('view') as HTMLCanvasElement;
		canvas.height = 288;
		canvas.width = 320;
		canvas.style.pointerEvents = 'none';
		return canvas;
	}

	private setContext(canvas: HTMLCanvasElement) {
		const context = canvas.getContext('2d') as CanvasRenderingContext2D;
		context.imageSmoothingEnabled = false;
		return context;
	}
}
