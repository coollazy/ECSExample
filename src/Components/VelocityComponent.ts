import { Component } from "../ECS/Component";

export default class VelocityComponent implements Component {
    // X速度
    public x: number = 0;
    // Y速度
    public y: number = 0;
}