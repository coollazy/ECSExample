import { Component } from "../ECS/Component";

export default class BoundComponent implements Component {
    public top: number;
    public bottom: number;
    public left: number;
    public right: number;
}