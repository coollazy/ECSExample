import EntityManager from "../ECS/EntityManager";
import Entity from '../ECS/Entity';
import EnemyGenerateComponent from "../Components/EnemyGenerateComponent";
import PositionComponent from '../Components/PositionComponent';

export default class CreateEnemy {
    entity: Entity

    constructor(entityManager: EntityManager, x: number, y: number) {
        this.entity = entityManager.createEntity();

        this.entity.addComponent(EnemyGenerateComponent);
        this.entity.enemyGenerateComponent.count = 3;
        // 毫秒
        const interval = 1500;
        this.entity.enemyGenerateComponent.interval = (interval / 1000) * 60;

        // 設定初始位置
        this.entity.addComponent(PositionComponent);
        this.entity.positionComponent.x = x;
        this.entity.positionComponent.y = y;
    }
}
