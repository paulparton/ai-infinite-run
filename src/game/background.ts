import { IBackground } from './interfaces';
import backgroundUrl from '../../assets/background.svg';

export class Background implements IBackground {
  private sprite: HTMLImageElement;
  constructor() {
    this.sprite = new Image();
    this.sprite.src = backgroundUrl;
  }
  update(_delta: number) {}
  render(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.sprite, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}
