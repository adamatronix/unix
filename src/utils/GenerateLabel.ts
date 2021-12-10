import ScreenFont from 'url:../assets/fonts/Scr18.ttf';

class GenerateLabel {
  canvas: HTMLCanvasElement;

  constructor(label:string) {
    let screenFont = new FontFace('Screen', `url(${ScreenFont})`);
    screenFont.load().then((font) => {
      document.fonts.add(font);
      this.writeTextToCanvas(label);
    });
    
  }

  writeTextToCanvas = (text:string) => {
    let canvas = document.createElement('canvas');
    this.canvas = canvas;
    canvas.width = 800;
    canvas.height = 50;
    let context = canvas.getContext('2d');
    context.font = "50px Screen";
    context.textAlign = "center";
    context.fillStyle = "#ffffff";
    context.fillText(text, 400, 50);
  }
}

export default GenerateLabel;