import EntityManager from "./ECS/EntityManager";
import SystemManager from "./ECS/SystemManager";

import RenderContainerSystem from "./Systems/RenderContainerSystem";

import RenderPositionSystem from "./Systems/RenderPositionSystem";
import PositionUpdateSystem from "./Systems/PositionUpdateSystem";
import VelocityUpdateSystem from "./Systems/VelocityUpdateSystem";

import RenderRotateSystem from "./Systems/RenderRotateSystem";
import RotateUpdateSystem from "./Systems/RotateUpdateSystem";
import RotateVelocityUpdateSystem from "./Systems/RotateVelocityUpdateSystem";

import CrosshairSystem from "./Systems/CrosshairSystem";
export default class App {
    readonly entityManager: EntityManager;
    readonly systemManager: SystemManager;
    
    constructor() {
        this.entityManager = new EntityManager();
        this.systemManager = new SystemManager();

        this.setupSystem();
    }

    private setupSystem() {
        // 建立將物件放到 Canvas 的 system
        this.systemManager.addSystem(new RenderContainerSystem(this.entityManager));

        this.systemManager.addSystem(new RenderPositionSystem(this.entityManager));
        this.systemManager.addSystem(new PositionUpdateSystem(this.entityManager));
        this.systemManager.addSystem(new VelocityUpdateSystem(this.entityManager));

        this.systemManager.addSystem(new RenderRotateSystem(this.entityManager));
        this.systemManager.addSystem(new RotateUpdateSystem(this.entityManager));
        this.systemManager.addSystem(new RotateVelocityUpdateSystem(this.entityManager));

        this.systemManager.addSystem(new CrosshairSystem(this.entityManager));
    }

    public update(delta: number) {
        this.systemManager.update(delta);
    }
}