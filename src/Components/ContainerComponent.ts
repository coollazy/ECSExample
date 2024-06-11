import { Component } from "../ECS/Component";
import { Container } from 'pixi.js';

export default class ContainerComponent implements Component {
    // 名稱
    public name: string;
    // 父類別 Container 的名稱
    public parnetContainerName: string;
    // pixi 的物件
    public container: Container;
}