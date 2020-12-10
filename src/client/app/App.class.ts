import { Hero } from '../characters/Hero.class';

export class App {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;
	private characters: any[] = [];
	constructor() {
		this.canvas = this.setCanvas();
		this.context = this.setContext(this.canvas);
		this.characters = [this.loadHero()];
		console.log(this.characters);
	}

	private handleInput() {}

	private loadHero() {
		return new Hero();
	}

	private play() {
		window.requestAnimationFrame(this.render.bind(this));
	}

	private render() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
