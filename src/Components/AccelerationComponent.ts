import { Component } from "../ECS/Component";

export default class AccelerationComponent implements Component {
    // X加速度
    public x: number = 0;
    // Y加速度
    public y: number = 0;
}