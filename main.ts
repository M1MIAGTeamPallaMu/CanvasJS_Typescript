class Main{

    private _canvas;
    private _ctx : any;

    constructor(){
        this.canvas = document.getElementById('myCanvas');
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.ctx = this._canvas.getContext('2d');
    }

    // Code temporaire pour tester le DnD
    DnDTest(){
        this.ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);  // now fill the canvas
    }

    get canvas(): any {
        return this._canvas;
    }
    set canvas(value) {
        this._canvas = value;
    }
    get ctx(): any {
        return this._ctx;
    }

    set ctx(value: any) {
        this._ctx = value;
    }
}
let test = new Main();
test.DnDTest();