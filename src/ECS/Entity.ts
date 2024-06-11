import { IComponent } from "./Component";

export default class Entity {
    [key: string]: any;

    // 儲存掛載在這個 Entity 的 components
    private components: Array<IComponent> = [];

    constructor() {}

    // 掛上 Component
    public addComponent(ComponentClass: IComponent): Entity {
        this.components.push(ComponentClass);

        // 取得 class 的名稱(String)
        let className: string = (ComponentClass as Function).name;
        // 將 class 名稱的第一個字母換成小寫
        className = className.charAt(0).toLowerCase() + className.slice(1);

        const componentObject = new ComponentClass();
        this[className] = componentObject;
        
        return this;
    }

    // 卸載 Component
    public removeComponents(ComponentClass: IComponent) {
        const index = this.components.indexOf(ComponentClass, 0);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }

    // 判斷這個 Entity 是否有指定的 Components
    public hasComponents(components: Array<IComponent>): boolean {
        var res: boolean = true;
        components.forEach( component => {
            res = res && (this.components.indexOf(component) > -1);
        });
        return res;
    }
}