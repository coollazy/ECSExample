import { Application, Container } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import Entity from '../ECS/Entity';
import ContainerComponent from '../Components/ContainerComponent';

export default class Stage {
    view: Container
    entity: Entity

    constructor(application: Application, entityManager: EntityManager) {
        this.view = application.stage;

        this.entity = entityManager.createEntity()
            .addComponent(ContainerComponent)

        this.entity.containerComponent.name = "stage";
        this.entity.containerComponent.container = this.view;
    }
}
