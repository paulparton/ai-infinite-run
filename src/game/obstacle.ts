import { IObstacle } from './interfaces';
import obstacleUrl from '../../assets/obstacle.svg';

export class Obstacle implements IObstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  private speed = 300;
  private sprite: HTMLImageElement;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = new Image();
    this.sprite.src = obstacleUrl;
  }

  update(delta: number) {
    this.x -= this.speed * delta;
  }

render(ctx: CanvasRenderingContext2D) {
  if (this.sprite.complete && this.sprite.naturalWidth !== 0) {
    ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  } else {
    // Optionally, draw a placeholder
    ctx.fillStyle = '#E94E77';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
}
