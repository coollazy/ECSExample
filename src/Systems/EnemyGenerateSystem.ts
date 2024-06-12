import { System } from "../ECS/System";
import Entity from "../ECS/Entity";
import { IComponent } from "../ECS/Component";
import EnemyGenerateComponent from "../Components/EnemyGenerateComponent";
import PositionComponent from "../Components/PositionComponent";
import DestoryComponent from "../Components/DestoryComponent";
import Enemy from "../Models/Enemy";

export default class EnemyGenerateSystem extends System {
    protected filter(): IComponent[] {
        return [
            EnemyGenerateComponent,
            PositionComponent,
        ]
    }

    public execute(entity: Entity, delta: number, ...args: any[]): void {
        if (entity.enemyGenerateComponent.currentCount >= entity.enemyGenerateComponent.count) {
            entity.addComponent(DestoryComponent);
            return;
        }

        entity.enemyGenerateComponent.delta += delta;
        if (entity.enemyGenerateComponent.delta > entity.enemyGenerateComponent.interval) {
            entity.enemyGenerateComponent.delta -= entity.enemyGenerateComponent.interval;

            const enemy = new Enemy(this.entityManager);
            enemy.entity.positionComponent.x = entity.positionComponent.x;
            enemy.entity.positionComponent.y = entity.positionComponent.y;

            entity.enemyGenerateComponent.currentCount += 1;
        }

    }
}