export class App {
  private context: CanvasRenderingContext2D | null;
  constructor() {
    const canvas = document.getElementById("view") as HTMLCanvasElement;
    this.context = canvas.getContext("2d");
    console.log(this.context);
  }
}
