import {DnD} from "../models/interaction";
import {Drawing, Line, Rectangle} from "../models/model";
import {drawPaint, linePaint, rectPaint} from "../view/view";

export class Controller {

    constructor(ctx: CanvasRenderingContext2D, drawing: Drawing, canvas: HTMLElement) {
        this.drawing = drawing;
        this.ctx = ctx;
        this.canvas = canvas;
    }

    private dragNdrop: DnD;
    private drawing: Drawing;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLElement;
    private _editingMode = {rect: 0, line: 1, circle: 2};

    private _currEditingMode: number | SVGLineElement;

    get currEditingMode(): number | SVGLineElement {
        return this._currEditingMode;
    }

    set currEditingMode(value: number | SVGLineElement) {
        this._currEditingMode = value;
    }

    private _currLineWidth: number;

    get currLineWidth(): number {
        return this._currLineWidth;
    }

    set currLineWidth(value: number) {
        this._currLineWidth = value;
    }

    private _currColour: string;

    get currColour(): string {
        return this._currColour;
    }

    set currColour(value: string) {
        this._currColour = value;
    }

    private _currentShape: any;

    get currentShape(): Rectangle | Line {
        return this._currentShape;
    }

    set currentShape(shape: Rectangle | Line) {
        this._currentShape = shape;
    }

    pencil() {
        console.log("ok it begins here");
        this._currEditingMode = this._editingMode.line;
        this._currLineWidth = 5;
        this._currColour = '#ff9c7a';
        this._currentShape = 0;
        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
        this.dragNdrop = new DnD(this.canvas, this);
    };

    onInteractionStart(dnd: DnD) {
        this.currLineWidth = +(<HTMLInputElement>document.getElementById('spinnerWidth')).value;
        this.currColour = (<HTMLInputElement>document.getElementById('color')).value;
        if((<HTMLInputElement>document.getElementById('butRect')).checked){
            this.currEditingMode = this._editingMode.rect;
        }
        if((<HTMLInputElement>document.getElementById('butLine')).checked){
            this.currEditingMode = this._editingMode.line;
        }

        //Switch sur une ligne ou un rectangle et affectation à la forme courante
        switch(this.currEditingMode){
            case this._editingMode.line:
                console.log("Un rectangle");
                this.currentShape = new Rectangle(this.currColour,this.currLineWidth, dnd.xInit, dnd.yInit, 0, 0);
                rectPaint(this.ctx,this.currentShape);
                break;
            case this._editingMode.line:
                console.log("Une ligne");
                this.currentShape = new Line(this.currColour,this.currLineWidth, dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal);
                linePaint(this.ctx,this.currentShape);
                break;

        }
    };

    onInteractionUpdate(dnd: DnD) {
        switch (this.currEditingMode) {
            case 0:
                this.currentShape = new Rectangle(this.currColour,this.currLineWidth, dnd.xInit, dnd.yInit, 0, 0);
                rectPaint(this.ctx,this.currentShape);
                break;
            case 1:
                this.currentShape = new Line(this.currColour,this.currLineWidth, dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal);
                linePaint(this.ctx,this.currentShape);
                break;
        }
        drawPaint(this.ctx,this.drawing, this.canvas);
    };

    onInteractionEnd(dnd: DnD) {
        switch (this.currEditingMode) {
            case 0:
                this.currentShape = new Rectangle(this.currColour,this.currLineWidth, dnd.xInit, dnd.yInit, 0, 0);
                rectPaint(this.ctx,this.currentShape);
                break;
            case 1:
                this.currentShape = new Line(this.currColour,this.currLineWidth, dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal);
                linePaint(this.ctx,this.currentShape);
                break;
        }
        drawPaint(this.ctx,this.drawing, this.canvas);
    };
}