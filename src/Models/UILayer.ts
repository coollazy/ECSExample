import PositionComponent from '../Components/PositionComponent';
import EntityManager from '../ECS/EntityManager';
import BaseContainer from './BaseContainer';

export default class UILayer extends BaseContainer {
    get parentContainerName(): string {
        return "stage";
    }

    get name(): string {
        return "uiLayer";
    }

    constructor(entityManager: EntityManager, width: number, height: number) {
        super(entityManager);

        // 設定位置組件
        this.entity.addComponent(PositionComponent);
        this.entity.positionComponent.x = width * 0.5;
        this.entity.positionComponent.y = height * 0.5;
    }
}
