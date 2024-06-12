import EntityManager from "../ECS/EntityManager";
import Entity from '../ECS/Entity';
import PositionComponent from '../Components/PositionComponent';
import TapComponent from '../Components/TapComponent';

export default class Tap {
    entity: Entity

    constructor(entityManager: EntityManager) {
        this.entity = entityManager.createEntity()
            .addComponent(TapComponent)
            .addComponent(PositionComponent)
    }
}
