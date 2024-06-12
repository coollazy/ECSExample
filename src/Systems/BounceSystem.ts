import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import PositionComponent from "../Components/PositionComponent";
import VelocityComponent from "../Components/VelocityComponent";
import BounceComponent from "../Components/BounceComponent";
import HitCircleComponent from "../Components/HitCircleComponent";
import BoundComponent from "../Components/BoundComponent";
import { Circle } from "../Utils/DetectCollision";

export default class BounceSystem extends System {
    protected filter(): IComponent[] {
        return [
            PositionComponent,
            VelocityComponent,
            HitCircleComponent,
            BounceComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        const boundEntity = this.entityManager.entitiesByComponents([BoundComponent])[0];

        if (boundEntity != null) {
            const entityHitCircle = new Circle(entity.positionComponent.x, entity.positionComponent.y, entity.hitCircleComponent.radius);

            if (entityHitCircle.centerX - entityHitCircle.radius < boundEntity.boundComponent.left && entity.velocityComponent.x < 0) {
                entity.velocityComponent.x = -entity.velocityComponent.x;
            }
            if (entityHitCircle.centerX + entityHitCircle.radius > boundEntity.boundComponent.right && entity.velocityComponent.x > 0) {
                entity.velocityComponent.x = -entity.velocityComponent.x;
            }
            if (entityHitCircle.centerY - entityHitCircle.radius < boundEntity.boundComponent.top && entity.velocityComponent.y < 0) {
                entity.velocityComponent.y = -entity.velocityComponent.y;
            }
            if (entityHitCircle.centerY + entityHitCircle.radius > boundEntity.boundComponent.bottom && entity.velocityComponent.y > 0) {
                entity.velocityComponent.y = -entity.velocityComponent.y;
            }
        }
    }
}