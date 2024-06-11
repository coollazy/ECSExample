import Entity from "./Entity";
import { IComponent } from "./Component";

export default class EntityManager {
    private entities: Array<Entity> = [];

    constructor() {}

    // 生成新的 Entity
    public createEntity(): Entity {
        // Pool的概念不實作，因為主要是效能差異
        // 這邊直接建立新的，remove的時候直接丟掉
        let entity = new Entity();
        this.entities.push(entity);
        return entity
    }

    // 丟棄 Entity
    public removeEntity(entity: Entity) {
        const index = this.entities.indexOf(entity, 0);
        if (index > -1) {
            this.entities.splice(index, 1);
        }
    }

    // 取得所有特定 Components 的 Entities
    public entitiesByComponents(components: Array<IComponent>): Array<Entity> {
        return this.entities.filter( element => {
            return element.hasComponents(components);
        });
    }
}