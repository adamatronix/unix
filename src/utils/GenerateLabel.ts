class GenerateLabel {

  constructor(label:string) {
    this.writeTextToCanvas(label);
  }

  writeTextToCanvas = (text:string) => {
    let canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 200;
    document.body.appendChild(canvas);
    let context = canvas.getContext('2d');
    context.font = "30px Arial";
    context.fillText(text, 10, 50);
  }
}

export default GenerateLabel;