import BaseContainer from './BaseContainer';
import { AnimatedSprite, Texture } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import Utils from '../Utils/Utils';
import PositionComponent from '../Components/PositionComponent';
import VelocityComponent from '../Components/VelocityComponent';
import AccelerationComponent from '../Components/AccelerationComponent';
import EnemyComponent from '../Components/EnemyComponent';
import RotateComponent from '../Components/RotateComponent';
import ForceDirectionComponenet from '../Components/ForceDirectionComponenet';
import HitCircleComponent from '../Components/HitCircleComponent';

export default class Enemy extends BaseContainer {
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
        for (let i = 0; i < 60; i++) {
            const index = Utils.zeroPad(i, 2);
            frames.push(Texture.from(`Samurai-idle_${index}.png`));
        }
        this.sprite = new AnimatedSprite(frames);
        this.sprite.anchor.set(0.5);
        this.sprite.animationSpeed = 0.5;
        this.sprite.play();
        this.sprite.width = 145;
        this.sprite.height = 130;
        this.sprite.rotation = 180 / 360 * 2 * Math.PI;
        this.addChild(this.sprite);

        // 增加 Enemy 組件
        this.entity.addComponent(EnemyComponent);

        // 增加位置組件
        this.entity.addComponent(PositionComponent);
        this.entity.positionComponent.x = 700;
        this.entity.positionComponent.y = 0;

        // 增加移動速度組件
        this.entity.addComponent(VelocityComponent);
        this.entity.velocityComponent.x = -1;
        this.entity.velocityComponent.y = -1;

        // 增加加速度組件
        this.entity.addComponent(AccelerationComponent);
        this.entity.accelerationComponent.y = 0.0018;

        // 增加旋轉組件
        this.entity.addComponent(RotateComponent);

        // 增加 ForceDirection 組件
        this.entity.addComponent(ForceDirectionComponenet);

        // 增加碰撞範圍組件
        this.entity.addComponent(HitCircleComponent);
        this.entity.hitCircleComponent.radius = 60;
    }
}
