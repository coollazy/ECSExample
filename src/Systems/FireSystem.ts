import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import PositionComponent from "../Components/PositionComponent";
import Bullet from '../Models/Bullet';
import TapComponent from "../Components/TapComponent";
import TurretComponent from "../Components/TurretComponent";
import DestoryComponent from "../Components/DestoryComponent";

export default class FireSystem extends System {
    protected filter(): IComponent[] {
        return [
            TapComponent,
            PositionComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        const bullet = new Bullet(this.entityManager);
        const turretEntity = this.entityManager.entitiesByComponents([TurretComponent])[0];
        if (turretEntity) {
            // 將子彈初始位置設定為砲台的位置
            bullet.entity.positionComponent.x = turretEntity.positionComponent.x;
            bullet.entity.positionComponent.y = turretEntity.positionComponent.y;

            // 計算子彈發出的速度及方向
            const dx = entity.positionComponent.x - turretEntity.positionComponent.x;
            const dy = entity.positionComponent.y - turretEntity.positionComponent.y;

            bullet.entity.velocityComponent.x = bullet.velocity * dx / (Math.abs(dx) + Math.abs(dy));
            bullet.entity.velocityComponent.y = bullet.velocity * dy / (Math.abs(dx) + Math.abs(dy));
        }
        entity.addComponent(DestoryComponent);
    }
}