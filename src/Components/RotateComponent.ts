import { Component } from "../ECS/Component";

export default class RotateComponent implements Component {
    // 弧度
    public rotation: number = 0;
    // 速度(單位:pixel/second)
    public velocity: number = 0;
    // 加速度(單位:pixel/second)
    public acceleration: number = 0;
}