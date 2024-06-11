import { Container, Graphics } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import Entity from "../ECS/Entity";
import ContainerComponent from '../Components/ContainerComponent';

export default abstract class BaseContainer extends Container {
    entityManager: EntityManager;
    entity: Entity;

    abstract get parentContainerName(): string;
    abstract get name(): string;

    constructor(entityManager: EntityManager) {
        super();
        this.entityManager = entityManager;

        this.setupEntityManager();
        this.setupPixiContainer();
        this.setupBackground();
    }

    private setupEntityManager() {
        this.entity = this.entityManager.createEntity()
            .addComponent(ContainerComponent)
        
        this.entity.containerComponent.parnetContainerName = this.parentContainerName;
        this.entity.containerComponent.name = this.name;
        this.entity.containerComponent.container = this;
    }

    private setupPixiContainer() {
        this.pivot.set(0.5);
    }

    private setupBackground() {
        const background = new Graphics()
            .rect(0, 0, this.width, this.height)
            .fill({ color: 0xffff00, alpha: 0.3 });
        this.addChild(background);
    }
}