import BaseContainer from './BaseContainer';
import { AnimatedSprite, Texture } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import PositionComponent from '../Components/PositionComponent';
import TurretComponent from '../Components/TurretComponent';
import Utils from '../Utils/Utils';
import RotateComponent from '../Components/RotateComponent';

export default class LightTank extends BaseContainer {
    get parentContainerName(): string {
        return "boundLayer";
    }

    get name(): string {
        return "lightTank";
    }

    sprite: AnimatedSprite;

    constructor(entityManager: EntityManager) {
        super(entityManager);

        const frames = [];
        for (let i = 90; i < 120; i++) {
            const index = Utils.zeroPad(i, 3);
            frames.push(Texture.from(`light tank_${index}.png`));
        }
        this.sprite = new AnimatedSprite(frames);
        this.sprite.anchor.set(0.5);
        this.sprite.animationSpeed = 0.5;
        this.sprite.play();
        this.sprite.width = 157;
        this.sprite.height = 200;
        this.sprite.rotation = 180 / 360 * 2 * Math.PI;
        this.addChild(this.sprite);

        // 增加砲塔組件
        this.entity.addComponent(TurretComponent);

        // 增加位置組件
        this.entity.addComponent(PositionComponent);
        this.entity.positionComponent.x = 0;
        this.entity.positionComponent.y = 350;

        // 增加旋轉組件
        this.entity.addComponent(RotateComponent);
    }
}
