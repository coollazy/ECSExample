import { Application, Container } from 'pixi.js';
import EntityManager from "../ECS/EntityManager";
import Entity from '../ECS/Entity';
import ContainerComponent from '../Components/ContainerComponent';
import Mouse from './Mouse';
import Tap from './Tap';

export default class Stage {
    view: Container
    entity: Entity

    constructor(application: Application, entityManager: EntityManager) {
        this.view = application.stage;

        this.entity = entityManager.createEntity()
            .addComponent(ContainerComponent)

        this.entity.containerComponent.name = "stage";
        this.entity.containerComponent.container = this.view;


        // 建立一個 Entity 會接收滑鼠移動的事件，紀錄座標
        this.view.eventMode = 'static';
        this.view.hitArea = application.screen;
        const mouse = new Mouse(entityManager);
        this.view.on('mousemove', (event) => {
            mouse.entity.positionComponent.x = event.global.x - application.screen.width * 0.5;
            mouse.entity.positionComponent.y = event.global.y - application.screen.height * 0.5;
        });

        
        // 建立一個 Entity 會接收點擊的事件，紀錄座標
        this.view.on('pointerdown', (event) => {
            const tap = new Tap(entityManager);
            tap.entity.positionComponent.x = event.global.x - application.screen.width * 0.5;
            tap.entity.positionComponent.y = event.global.y - application.screen.height * 0.5;
        });
    }
}
