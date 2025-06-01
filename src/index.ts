import { Game } from './game/Game';

window.onload = () => {
  // Create and insert canvas if not present
  let canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null;
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'game-canvas';
    canvas.width = 512;
    canvas.height = 128;
    document.body.appendChild(canvas);
  }

  // Start the game
  const game = new Game('game-canvas');
  game.start();
};