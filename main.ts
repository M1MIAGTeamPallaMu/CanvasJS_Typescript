import {Controller} from "./controller/controller";
import {DnD} from "./models/interaction";
import {Drawing, Line, Rectangle} from "./models/model";
import {drawPaint} from "./view/view";

class Main {
    private _canvas;
    private _ctx: any;
    private _dnd: DnD;

    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.ctx = this._canvas.getContext("2d");
    }

    public DnDTest() {
        this.dnd = new DnD(this.canvas);
        this.canvas.onmousedown = (event: MouseEvent) => {
            this.dnd.select(event);
        };
        this.canvas.onmousemove = (event: MouseEvent) => {
            this.dnd.move(event);
        };
        this.canvas.onmouseleave = (event: MouseEvent) => {
            this.dnd.release(event);
        };
        this.ctx.fillStyle = "#F0F0F0"; // set canvas' background color
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);  // now fill the canvas
    }

    public DrawTest() {
        const drawing = new Drawing();
        const rec = new Rectangle("#ccc61c", 20, 50, 100, 5, 60);
        const rec1 = new Rectangle("#37e1ee", 120, 50, 100, 105, 210);
        const rec2 = new Rectangle("#cc3b3b", 220, 450, 300, 55, 70);

        const line1 = new Line("#cc8575", 40, 50, 100, 225, 710);
        const line2 = new Line("#ccb55b", 30, 50, 200, 250, 410);
        const line3 = new Line("#4164cc", 50, 50, 300, 600, 190);

        drawing.addShape(rec);
        drawing.addShape(rec1);
        drawing.addShape(rec2);
        drawing.addShape(line1);
        drawing.addShape(line2);
        drawing.addShape(line3);

        drawPaint(this.ctx, drawing, this.canvas);
    }

    public appTest() {
        const drawing = new Drawing();
        const pencil = new Controller(this.ctx, drawing, this.canvas);
        pencil.pencil();
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

    get dnd(): DnD {
        return this._dnd;
    }

    set dnd(value: DnD) {
        this._dnd = value;
    }
}

const test = new Main();
 //test.DnDTest();
 //test.DrawTest();
test.appTest();
