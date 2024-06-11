import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import ContainerComponent from "../Components/ContainerComponent";

// 讓 pixi 物件顯示在畫面上
export default class RenderContainerSystem extends System {
    protected filter(): IComponent[] {
        return [
            ContainerComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        // 如果 container 的物件沒有 parent
        if (entity.containerComponent.container.parent == null) {
            // 找到 container 指定的 parent
            const parentEntity = this.entityManager.entitiesByComponents([ContainerComponent])
                .find(e => { 
                    return e.containerComponent.name == entity.containerComponent.parnetContainerName
                })
                
            if (parentEntity != null) {
                console.log("Add Child");
                // 加到 parent 下面
                parentEntity.containerComponent.container.addChild(entity.containerComponent.container);
            }
        }
    }
}