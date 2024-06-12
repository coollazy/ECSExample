import BaseContainer from './BaseContainer';
import { Sprite, Texture } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";

export default class Background extends BaseContainer {
    get parentContainerName(): string {
        return "backgroundLayer";
    }

    get name(): string {
        return "background";
    }

    sprite: Sprite;

    constructor(entityManager: EntityManager) {
        super(entityManager);

        const texture = Texture.from('assets/background/background.jpg');
        this.sprite = new Sprite(texture);
        this.sprite.anchor.set(0.5);
        this.addChild(this.sprite);
    }
}
