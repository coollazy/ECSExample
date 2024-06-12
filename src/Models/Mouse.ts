import EntityManager from "../ECS/EntityManager";
import Entity from '../ECS/Entity';
import PositionComponent from '../Components/PositionComponent';
import MouseComponent from '../Components/MouseComponent';

export default class Mouse {
    entity: Entity

    constructor(entityManager: EntityManager) {
        this.entity = entityManager.createEntity()
            .addComponent(MouseComponent)
            .addComponent(PositionComponent)
    }
}
