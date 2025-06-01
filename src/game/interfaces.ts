// Game interfaces
export interface IGame {
  start(): void;
  update(delta: number): void;
  render(ctx: CanvasRenderingContext2D): void;
}

export interface IRunner {
  x: number;
  y: number;
  width: number;
  height: number;
  velocityY: number;
  isJumping: boolean;
  jump(): void;
  update(delta: number): void;
  render(ctx: CanvasRenderingContext2D): void;
}

export interface IObstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  update(delta: number): void;
  render(ctx: CanvasRenderingContext2D): void;
}

export interface IBackground {
  update(delta: number): void;
  render(ctx: CanvasRenderingContext2D): void;
}

export interface ITerrain {
  update(delta: number): void;
  render(ctx: CanvasRenderingContext2D): void;
}
