import Entity from "./Entity";
import EntityManager from "./EntityManager";
import { IComponent } from "./Component"

// 宣告一個 abstract System 父類別，所有 System 必須繼承這個 class
export abstract class System {
    readonly entityManager: EntityManager;
    
    constructor(entityManager: EntityManager) {
        this.entityManager = entityManager;
    }
    
    public update(delta: number): void {
        this.entityManager
            .entitiesByComponents(this.filter())
            .slice()
            .forEach(entity => {
                this.execute(entity, delta)
            });
    }
    
    // 繼承時，需要指定要處理的 Entities 有哪些 Components 
    protected filter(): Array<IComponent> {
        return [];
    }
    
    // 繼承時，需要實作System要處理的內容
    public abstract execute(entity: Entity, delta: number, ...args: any[]): void;
}