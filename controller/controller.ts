import {DnD} from "../models/interaction";
import {Drawing, Line, Rectangle} from "../models/model";
import {drawPaint, linePaint, rectPaint} from "../view/view";

export class Controller {
    private dragNdrop: DnD;
    private drawing: Drawing;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLElement;
    private _editingMode = {rect: 0, line: 1, circle: 2};
    private _currEditingMode: number | SVGLineElement;
    private _currLineWidth: number;
    private _currColour: string;
    private _currentShape: any;

    constructor(ctx: CanvasRenderingContext2D, drawing: Drawing, canvas: HTMLElement) {
        this.drawing = drawing;
        this.ctx = ctx;
        this.canvas = canvas;
    }

    get currEditingMode(): number | SVGLineElement {
        return this._currEditingMode;
    }

    set currEditingMode(value: number | SVGLineElement) {
        this._currEditingMode = value;
    }

    get currLineWidth(): number {
        return this._currLineWidth;
    }

    set currLineWidth(value: number) {
        this._currLineWidth = value;
    }

    get currColour(): string {
        return this._currColour;
    }

    set currColour(value: string) {
        this._currColour = value;
    }

    get currentShape(): Rectangle | Line {
        return this._currentShape;
    }

    set currentShape(shape: Rectangle | Line) {
        this._currentShape = shape;
    }

    public pencil() {
        this._currEditingMode = this._editingMode.line;
        this._currLineWidth = 5;
        this._currColour = "#ff9c7a";
        this._currentShape = 0;
        this.dragNdrop = new DnD(this.canvas, this);
    }

    public onInteractionStart(dnd: DnD) {
        dnd = this.dragNdrop;
        this.currLineWidth = +(document.getElementById("spinnerWidth") as HTMLInputElement).value;
        this.currColour = (document.getElementById("color") as HTMLInputElement).value;
        if ((document.getElementById("butRect") as HTMLInputElement).checked) {
            this.currEditingMode = this._editingMode.rect;
        }
        if ((document.getElementById("butLine") as HTMLInputElement).checked) {
            this.currEditingMode = this._editingMode.line;
        }

        switch (this.currEditingMode) {
            case this._editingMode.rect:
                this.currentShape = new Rectangle(this.currColour, this.currLineWidth, dnd.xInit, dnd.yInit, 0, 0);
                break;
            case this._editingMode.line:
                this.currentShape = new Line(this.currColour, this.currLineWidth, dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal);
                break;
        }
    }

    public onInteractionUpdate(dnd: DnD) {
        dnd = this.dragNdrop;
        switch (this.currEditingMode) {
            case this._editingMode.rect:
                const width = dnd.xFinal - dnd.xInit;
                const height = dnd.yFinal - dnd.yInit;
                this.currentShape = new Rectangle(this.currColour, this.currLineWidth, dnd.xInit, dnd.yInit, width, height);
                rectPaint(this.ctx, this.currentShape);
                break;
            case this._editingMode.line:
                this.currentShape = new Line(this.currColour, this.currLineWidth, dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal);
                linePaint(this.ctx, this.currentShape);
                break;
        }
        this.ctx.clearRect(0, 0, +this.canvas.style.width, +this.canvas.style.height);
        drawPaint(this.ctx, this.drawing, this.canvas);
    }

    public onInteractionEnd(dnd: DnD) {
        dnd = this.dragNdrop;
        switch (this.currEditingMode) {
            case this._editingMode.rect:
                const width = dnd.xFinal - dnd.xInit;
                const height = dnd.yFinal - dnd.yInit;
                this.currentShape = new Rectangle(this.currColour, this.currLineWidth, dnd.xInit, dnd.yInit, width, height);
                break;
            case this._editingMode.line:
                console.log("Une ligne");
                this.currentShape = new Line(this.currColour, this.currLineWidth, dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal);
                break;
        }
        this.drawing.addShape(this.currentShape);
        this.ctx.clearRect(0, 0, +this.canvas.style.width, +this.canvas.style.height);
        drawPaint(this.ctx, this.drawing, this.canvas);
    }
}
