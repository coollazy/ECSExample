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
import TurretDirectionSystem from "./Systems/TurretDirectionSystem";

import BounceSystem from "./Systems/BounceSystem";

import FireSystem from "./Systems/FireSystem";

import ForceDirectionSystem from "./Systems/ForceDirectionSystem";

import EnemyGenerateSystem from "./Systems/EnemyGenerateSystem";

import BulletCollisionSystem from "./Systems/BulletCollisionSystem";

import DestorySystem from "./Systems/DestorySystem";

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
        this.systemManager.addSystem(new TurretDirectionSystem(this.entityManager));

        this.systemManager.addSystem(new BounceSystem(this.entityManager));
        
        this.systemManager.addSystem(new FireSystem(this.entityManager));

        this.systemManager.addSystem(new ForceDirectionSystem(this.entityManager));
        
        this.systemManager.addSystem(new EnemyGenerateSystem(this.entityManager));

        this.systemManager.addSystem(new BulletCollisionSystem(this.entityManager));

        this.systemManager.addSystem(new DestorySystem(this.entityManager));
    }

    public update(delta: number) {
        this.systemManager.update(delta);
    }
}