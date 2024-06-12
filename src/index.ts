import { Application, Assets } from 'pixi.js';
import App from './App';
import Stage from './Models/Stage';
import BoundLayer from './Models/BoundLayer';
import Bunny from './Models/Bunny';
import Crosshair from './Models/Crosshair';
import LightTank from './Models/LightTank';
import CreateEnemy from './Models/CreateEnemy';

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
        'assets/crosshair/crosshair.png',
        'assets/turret/light tank.json',
        'assets/bullet/bullet.png',
        'assets/enemy/samurai.json',
    ]);

    // 建立場景
    const stage = new Stage(pixi, app.entityManager);

    // 建立邊界 Layer
    const bound = new BoundLayer(app.entityManager, pixi.screen.width, pixi.screen.height);

    // 建立 Bunny
    // const bunny = new Bunny(app.entityManager);

    // 建立砲台
    const lightTank = new LightTank(app.entityManager);

    // 建立準心
    const corsshair = new Crosshair(app.entityManager);
    // 設定敵人出現
    new CreateEnemy(app.entityManager, 700, 0);
    new CreateEnemy(app.entityManager, 700, 100);
    new CreateEnemy(app.entityManager, 700, 200);

    // 定時產生新的敵人
    var delta: number = 0
    var enemyDuration: number = 10000;
    pixi.ticker.add((time) => {
        delta += time.deltaTime;
        if (delta > (enemyDuration / 1000) * 60) {
            new CreateEnemy(app.entityManager, 700, 0);
            new CreateEnemy(app.entityManager, 700, 150);
            new CreateEnemy(app.entityManager, 700, 300);

            delta = 0;
        }
    });
})();