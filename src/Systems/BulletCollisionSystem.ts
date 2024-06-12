import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import PositionComponent from "../Components/PositionComponent";
import EnemyComponent from "../Components/EnemyComponent";
import BulletComponent from "../Components/BulletComponent";
import HitCircleComponent from "../Components/HitCircleComponent";
import { DetectCollision, Circle } from "../Utils/DetectCollision";
import Explorsion from "../Models/Explorsion";
import DestoryComponent from "../Components/DestoryComponent";

export default class BulletCollisionSystem extends System {
    protected filter(): IComponent[] {
        return [
            BulletComponent,
            PositionComponent,
            HitCircleComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        const enmeyEntities = this.entityManager.entitiesByComponents([EnemyComponent, PositionComponent, HitCircleComponent]);
        enmeyEntities.forEach( enemyEntity => {
            const bulletCircle = new Circle(entity.positionComponent.x, entity.positionComponent.y, entity.hitCircleComponent.radius);
            const enemyCircle = new Circle(enemyEntity.positionComponent.x, enemyEntity.positionComponent.y, enemyEntity.hitCircleComponent.radius);
            if (DetectCollision.isCircleCollision(bulletCircle, enemyCircle)) {
                const explorsion = new Explorsion(this.entityManager);
                explorsion.entity.positionComponent.x = entity.positionComponent.x;
                explorsion.entity.positionComponent.y = entity.positionComponent.y;

                // 子彈擊中敵人後消失
                entity.addComponent(DestoryComponent);
                // 被子彈擊中就消失
                enemyEntity.addComponent(DestoryComponent);
            }
        });
    }
}