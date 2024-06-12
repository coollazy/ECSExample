import { Component } from "../ECS/Component";

export default class EnemyGenerateComponent implements Component {
    // 總共要產生幾個
    count: number;
    // 產生的時間間隔
    interval: number;

    // 產生的位置，可以不用自己宣告。直接跟 Position 組合使用
    // x: number
    // y: number

    currentCount: number = 0;
    delta: number = 0;
}