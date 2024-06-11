import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import VelocityComponent from "../Components/VelocityComponent";
import AccelerationComponent from "../Components/AccelerationComponent";

export default class VelocityUpdateSystem extends System {
    protected filter(): IComponent[] {
        return [
            VelocityComponent,
            AccelerationComponent
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        entity.velocityComponent.x += entity.accelerationComponent.x;
        entity.velocityComponent.y += entity.accelerationComponent.y;
    }
}