import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import RotateComponent from "../Components/RotateComponent";
import ContainerComponent from "../Components/ContainerComponent";

export default class RenderRotateSystem extends System {
    protected filter(): IComponent[] {
        return [
            RotateComponent,
            ContainerComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        // 將更新後的 rotation 更新至 pixi 的物件上
        entity.containerComponent.container.rotation = entity.rotateComponent.rotation;
    }
}