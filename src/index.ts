import { Application, Container, Assets, Sprite } from 'pixi.js';

(async () =>
{
    // 建立 PIXIJS Application
    const pixi = new Application();

    // 初始化
    await pixi.init({ background: '#1099bb', resizeTo: window });
    // 把 Application 產生的 Canvas 加到 html 畫面上
    document.body.appendChild(pixi.canvas);


    // Stage
    const stage = pixi.stage;


    // 建立 Container
    const container = new Container();
    container.x = pixi.screen.width / 2;
    container.y = pixi.screen.height / 2;

    // 加到畫面上
    stage.addChild(container);


    // 建立 Bunny
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
    const bunny = new Sprite(texture);
    bunny.width = 150;
    bunny.height = 150;
    bunny.anchor.set(0.5);

    // 加到畫面上
    container.addChild(bunny);
    



    function rotateAnimation() {
        // 設定 Container 的更新內容
        pixi.ticker.add((time) => {
            // 根據時間旋轉
            container.rotation -= 0.01 * time.deltaTime;
        });
    }
    rotateAnimation();

    // FPS 設定
    function delayAnimation(time: number) {
        const fps = 15;
        
        const currentTime: number = Date.now();
        console.log(currentTime);
        setTimeout(() => {
            container.rotation -= 0.001 * time;
            delayAnimation(Date.now() - currentTime);
        }, 1000 / fps);
    }
    // delayAnimation(0);

})();