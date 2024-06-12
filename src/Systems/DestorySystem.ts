import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";;
import DestoryComponent from "../Components/DestoryComponent";
import ContainerComponent from "../Components/ContainerComponent";

export default class DestorySystem extends System {
    protected filter(): IComponent[] {
        return [
            DestoryComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        if (entity.hasComponents([ContainerComponent])) {
            const container = entity.containerComponent.container;
            const parentContainer = container.parent;
            if (parentContainer) {
                parentContainer.removeChild(container);
            }
            container.destroy();
        }
        this.entityManager.removeEntity(entity);
    }
}