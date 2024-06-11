import { System } from './System';

export default class SystemManager {
    private systems: Array<System> = [];

    constructor() {}

    public addSystem(system: System) {
        this.systems.push(system);
    }

    public update(delta: number) {
        this.systems.forEach(system => {
            system.update(delta)
        });
    }
}