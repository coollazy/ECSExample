import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import PositionComponent from "../Components/PositionComponent";
import VelocityComponent from "../Components/VelocityComponent";

export default class PositionUpdateSystem extends System {
    protected filter(): IComponent[] {
        return [
            PositionComponent,
            VelocityComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        entity.positionComponent.x += entity.velocityComponent.x;
        entity.positionComponent.y += entity.velocityComponent.y;
    }
}