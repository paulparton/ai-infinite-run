import { ITerrain } from './interfaces';
import terrainUrl from '../../assets/terrain.svg';

export class Terrain implements ITerrain {
    private sprite: HTMLImageElement;
    constructor() {
        this.sprite = new Image();
        this.sprite.src = terrainUrl;
    }
    update(_delta: number) { }
    render(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.sprite, 0, 96, ctx.canvas.width, 32);
    }
}



