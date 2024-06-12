import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import TurretComponent from "../Components/TurretComponent";
import RotateComponent from "../Components/RotateComponent";
import CrosshairComponent from "../Components/CrosshairComponent";
import PositionComponent from "../Components/PositionComponent";

export default class TurretDirectionSystem extends System {
    protected filter(): IComponent[] {
        return [
            TurretComponent,
            PositionComponent,
            RotateComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        const crosshairEntity = this.entityManager.entitiesByComponents([CrosshairComponent, PositionComponent])[0];
        const targetX = crosshairEntity.positionComponent.x - entity.positionComponent.x;
        const targetY = crosshairEntity.positionComponent.y - entity.positionComponent.y;
        const newRotation = Math.atan2(targetY, targetX) + Math.PI * 0.5;
        entity.rotateComponent.rotation = newRotation;
    }
}