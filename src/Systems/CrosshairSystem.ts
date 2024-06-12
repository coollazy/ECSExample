import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import CrosshairComponent from "../Components/CrosshairComponent";
import PositionComponent from "../Components/PositionComponent";
import MouseComponent from "../Components/MouseComponent";

export default class CrosshairSystem extends System {
    protected filter(): IComponent[] {
        return [
            CrosshairComponent,
            PositionComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        const mouseEntity = this.entityManager.entitiesByComponents([MouseComponent])[0];
        if (mouseEntity) {
            entity.positionComponent.x = mouseEntity.positionComponent.x;
            entity.positionComponent.y = mouseEntity.positionComponent.y;
        }
    }
}