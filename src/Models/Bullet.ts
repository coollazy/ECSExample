import BaseContainer from './BaseContainer';
import { Sprite, Texture } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import PositionComponent from '../Components/PositionComponent';
import RotateComponent from '../Components/RotateComponent';
import VelocityComponent from '../Components/VelocityComponent';
import BounceComponent from '../Components/BounceComponent';
import HitCircleComponent from '../Components/HitCircleComponent';
import BulletComponent from '../Components/BulletComponent';
import ForceDirectionComponenet from '../Components/ForceDirectionComponenet';

export default class Bullet extends BaseContainer {
    get parentContainerName(): string {
        return "boundLayer";
    }

    get name(): string {
        return "bullet";
    }

    sprite: Sprite;
    velocity: number = 10;

    constructor(entityManager: EntityManager) {
        super(entityManager);
        
        const texture = Texture.from('assets/bullet/bullet.png');
        this.sprite = new Sprite(texture);
        this.sprite.width = 20;
        this.sprite.height = 40;
        this.sprite.anchor.set(0.5);
        this.addChild(this.sprite);

        // 新增 Bullet 組件
        this.entity.addComponent(BulletComponent);
        
        // 新增位置組件
        this.entity.addComponent(PositionComponent);

        // 新增旋轉組件
        this.entity.addComponent(RotateComponent);

        // 新增速度組件
        this.entity.addComponent(VelocityComponent);

        // 新增根據速度自動旋轉方向組件
        this.entity.addComponent(ForceDirectionComponenet);

        // 新增邊界碰撞反彈
        this.entity.addComponent(BounceComponent);

        // 設定碰撞範圍大小
        this.entity.addComponent(HitCircleComponent);
        this.entity.hitCircleComponent.radius = 15;
    }
}
