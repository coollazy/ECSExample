import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import RotateComponent from "../Components/RotateComponent";

export default class RotateUpdateSystem extends System {
    protected filter(): IComponent[] {
        return [
            RotateComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        entity.rotateComponent.rotation += entity.rotateComponent.velocity;
    }
}