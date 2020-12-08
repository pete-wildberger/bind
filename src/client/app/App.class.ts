import { Hero } from '../characters/Hero.class';

export class App {
	private context: CanvasRenderingContext2D;
	private characters: any[] = [];
	constructor() {
		const canvas = this.setCanvas();
		this.context = this.setContext(canvas);
		this.characters = [this.loadHero()];
		console.log(this.characters);
	}

	private loadHero() {
		return new Hero();
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
