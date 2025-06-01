import { IRunner } from './interfaces';
import characterUrl from '../../assets/character.svg';

export class Runner implements IRunner {
    x: number;
    y: number;
    width: number;
    height: number;
    velocityY: number = 0;
    isJumping: boolean = false;
    private gravity = 1200;
    private jumpStrength = -500;
    private groundY = 80;
    private sprite: HTMLImageElement;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = new Image();
        // At the top of your file

        // In your constructor
        this.sprite = new Image();
        this.sprite.src = characterUrl;
    }

    jump() {
        if (!this.isJumping) {
            this.velocityY = this.jumpStrength;
            this.isJumping = true;
        }
    }

    update(delta: number) {
        this.y += this.velocityY * delta;
        this.velocityY += this.gravity * delta;
        if (this.y >= this.groundY) {
            this.y = this.groundY;
            this.velocityY = 0;
            this.isJumping = false;
        }
    }

render(ctx: CanvasRenderingContext2D) {
  if (this.sprite.complete && this.sprite.naturalWidth !== 0) {
    ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  } else {
    // Optionally, draw a placeholder
    ctx.fillStyle = '#4A90E2';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
}
