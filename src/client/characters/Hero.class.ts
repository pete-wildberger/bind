import { HERO_IMG } from '../../assets';
import { Character } from './Character.class';

export class Hero extends Character {
	constructor() {
		super(0, 0, 48, 48, HERO_IMG, 2);
	}
}
