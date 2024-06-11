import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import ContainerComponent from "../Components/ContainerComponent";
import PositionComponent from "../Components/PositionComponent";

export default class RenderPositionSystem extends System {
    protected filter(): IComponent[] {
        return [
            PositionComponent,
            ContainerComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        // 將更新後的 xy座標更新至 pixi 的物件上
        entity.containerComponent.container.x = entity.positionComponent.x;
        entity.containerComponent.container.y = entity.positionComponent.y;
    }
}