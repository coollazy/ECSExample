import BaseContainer from './BaseContainer';
import { Sprite, Texture } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import PositionComponent from '../Components/PositionComponent';
import RotateComponent from '../Components/RotateComponent';
import VelocityComponent from '../Components/VelocityComponent';
import BounceComponent from '../Components/BounceComponent';
import HitCircleComponent from '../Components/HitCircleComponent';

export default class Bunny extends BaseContainer {
    get parentContainerName(): string {
        return "boundLayer";
    }

    get name(): string {
        return "bunny";
    }

    sprite: Sprite;

    constructor(entityManager: EntityManager) {
        super(entityManager);

        const texture = Texture.from('assets/bunny.png');
        this.sprite = new Sprite(texture);
        this.sprite.width = 100;
        this.sprite.height = 100;
        this.sprite.anchor.set(0.5);
        this.addChild(this.sprite);


        // 增加位置組件
        this.entity.addComponent(PositionComponent);
        this.entity.positionComponent.x = 0;
        this.entity.positionComponent.y = 0;

        // 增加旋轉組件
        this.entity.addComponent(RotateComponent);
        this.entity.rotateComponent.rotation = 0;
        // this.entity.rotateComponent.velocity = 0.05;
        // 旋轉漸漸加速
        // this.entity.rotateComponent.velocity = 0.01;
        // this.entity.rotateComponent.acceleration = 0.0005;
        // 旋轉漸漸減速
        // this.entity.rotateComponent.velocity = 0.3;
        // this.entity.rotateComponent.acceleration = -0.001;


        // 增加移動速度組件
        this.entity.addComponent(VelocityComponent);
        this.entity.velocityComponent.x = 3;
        this.entity.velocityComponent.y = 3;

        // 增加碰撞範圍組件
        this.entity.addComponent(HitCircleComponent);
        this.entity.hitCircleComponent.radius = 45;

        // 增加碰到邊界會反彈的組件
        this.entity.addComponent(BounceComponent);
    }
}
