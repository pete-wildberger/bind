import { HERO_IMG } from '../../assets';

export class Hero {
	public sprite: HTMLImageElement;
	constructor() {
		this.sprite = this.loadSprite(HERO_IMG);
	}

	private loadSprite(url: string): HTMLImageElement {
		const img = new Image();
		img.src = url;
		return img;
	}
}
