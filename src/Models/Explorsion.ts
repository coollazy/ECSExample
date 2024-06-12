import BaseContainer from './BaseContainer';
import { AnimatedSprite, Texture } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import PositionComponent from '../Components/PositionComponent';
import Utils from '../Utils/Utils';
import DestoryComponent from '../Components/DestoryComponent';

export default class Explorsion extends BaseContainer {
    get parentContainerName(): string {
        return "boundLayer";
    }

    get name(): string {
        return "explorsion";
    }

    sprite: AnimatedSprite;

    constructor(entityManager: EntityManager) {
        super(entityManager);
        
        const frames = [];
        for (let i = 0; i < 7; i++) {
            const index = Utils.zeroPad(i, 3);
            frames.push(Texture.from(`explorsion_${index}.png`));
        }
        this.sprite = new AnimatedSprite(frames);
        this.sprite.anchor.set(0.5);
        this.sprite.animationSpeed = 0.5;
        this.sprite.play();
        this.sprite.width = 70;
        this.sprite.height = 70;
        this.sprite.loop = false;
        this.sprite.onComplete = () => {
            this.entity.addComponent(DestoryComponent);
        }
        this.addChild(this.sprite);

        // 增加位置組件
        this.entity.addComponent(PositionComponent);
    }
}
