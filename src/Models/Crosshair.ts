import BaseContainer from './BaseContainer';
import { Sprite, Texture } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import PositionComponent from '../Components/PositionComponent';
import CrosshairComponent from '../Components/CrosshairComponent';

export default class Crosshair extends BaseContainer {
    get parentContainerName(): string {
        return "boundLayer";
    }

    get name(): string {
        return "crosshair";
    }

    sprite: Sprite;

    constructor(entityManager: EntityManager) {
        super(entityManager);

        const texture = Texture.from('assets/crosshair/crosshair.png');
        this.sprite = new Sprite(texture);
        this.sprite.width = 70;
        this.sprite.height = 70;
        this.sprite.anchor.set(0.5);
        this.addChild(this.sprite);

        // 增加準心組件
        this.entity.addComponent(CrosshairComponent);

        // 增加位置組件
        this.entity.addComponent(PositionComponent);
    }
}
