import { Component } from "../ECS/Component";

export default class PositionComponent implements Component {
    // X座標
    public x: number = 0;
    // Y座標
    public y: number = 0;
}