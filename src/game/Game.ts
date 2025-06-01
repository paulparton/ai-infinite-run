import { IGame, IRunner, IObstacle, IBackground, ITerrain } from './interfaces';
import { Runner } from './runner';
import { Obstacle } from './obstacle';
import { Background } from './background';
import { Terrain } from './terrain';

export class Game implements IGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private runner: IRunner;
  private obstacles: IObstacle[] = [];
  private background: IBackground;
  private terrain: ITerrain;
  private lastTime = 0;
  private obstacleTimer = 0;
  private running = false;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.runner = new Runner(64, 400, 48, 48);
    this.background = new Background();
    this.terrain = new Terrain();
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        this.runner.jump();
      }
    });
  }

  start() {
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(this.loop.bind(this));
  }

  private loop(time: number) {
    if (!this.running) return;
    const delta = (time - this.lastTime) / 1000;
    this.lastTime = time;
    this.update(delta);
    this.render(this.ctx);
    requestAnimationFrame(this.loop.bind(this));
  }

  update(delta: number) {
    this.background.update(delta);
    this.terrain.update(delta);
    this.runner.update(delta);
    this.obstacleTimer += delta;
    if (this.obstacleTimer > 1.5 + Math.random()) {
      this.obstacles.push(new Obstacle(512, 80, 32, 64));
      this.obstacleTimer = 0;
    }
    this.obstacles.forEach((o) => o.update(delta));
    this.obstacles = this.obstacles.filter((o) => o.x + o.width > 0);
    // TODO: Add collision detection
  }

  render(ctx: CanvasRenderingContext2D) {
    this.background.render(ctx);
    this.terrain.render(ctx);
    this.runner.render(ctx);
    this.obstacles.forEach((o) => o.render(ctx));
  }
}
