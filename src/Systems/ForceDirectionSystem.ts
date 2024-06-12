import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import ForceDirectionComponenet from "../Components/ForceDirectionComponenet";
import VelocityComponent from "../Components/VelocityComponent";
import RotateComponent from "../Components/RotateComponent";

export default class ForceDirectionSystem extends System {
    protected filter(): IComponent[] {
        return [
            ForceDirectionComponenet,
            VelocityComponent,
            RotateComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        const targetX = entity.velocityComponent.x;
        const targetY = entity.velocityComponent.y;
        const newRotation = Math.atan2(targetY, targetX) + Math.PI * 0.5;
        entity.rotateComponent.rotation = newRotation;
    }
}