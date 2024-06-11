import { Application, Assets } from 'pixi.js';
import App from './App';
import Stage from './Models/Stage';
import BoundLayer from './Models/BoundLayer';
import Bunny from './Models/Bunny';

(async () =>
{
    // 建立 PIXIJS Application
    const pixi = new Application();

    // 初始化
    await pixi.init({ background: '#1099bb', width: 1280, height: 720 });
    // 把 Application 產生的 Canvas 加到 html 畫面上
    document.body.appendChild(pixi.canvas);

    // 使用 ECS 架構建立 Entity
    const app = new App();
    pixi.ticker.add((time) => { 
        app.update(time.deltaTime);
    })

    // 載入圖檔
    await Assets.load([
        'assets/bunny.png',
    ]);

    // 建立場景
    const stage = new Stage(pixi, app.entityManager);

    // 建立邊界 Layer
    const bound = new BoundLayer(app.entityManager, pixi.screen.width, pixi.screen.height);

    // 建立 Bunny
    const bunny = new Bunny(app.entityManager);
})();