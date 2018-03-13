import {DnD} from "../models/interaction";
import {Drawing, Line, Rectangle, Shape} from "../models/model";
import {drawPaint} from "../view/view";

export class controller {
    private dragNdrop: DnD;
    private drawing: Drawing;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLElement;

    private _editingMode = {rect: 0, line: 1};

    get editingMode(): { rect: number; line: number } {
        return this._editingMode;
    }

    set editingMode(value: { rect: number; line: number }) {
        this._editingMode = value;
    }

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

    private _currentShape: Shape;

    get currentShape(): Shape {
        return this._currentShape;
    }

    set currentShape(shape: Shape) {
        this._currentShape = shape;
    }

    pencil(ctx, drawing, canvas) {
        this._currEditingMode = this._editingMode.line;
        this._currLineWidth = 5;
        this._currColour = '#ff9c7a';
        this._currentShape = null;
        this.ctx = ctx;
        this.drawing = drawing;
        this.canvas = canvas;
        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
        this.dragNdrop = new DnD(canvas, this);
    };

    onInteractionStart() {
        this.currLineWidth = +(<HTMLInputElement>document.getElementById('spinnerWidth')).value;
        this.currColour = (<HTMLInputElement>document.getElementById('colour')).value;
        let recButton = (<HTMLInputElement>document.getElementById('butRect')).checked;
        let lineButton = (<HTMLInputElement>document.getElementById('butLine')).checked;
        if (recButton) {
            this.currEditingMode = 0;
        } else if (lineButton) {
            this.currEditingMode = 1;
        }

        //switch sur une ligne ou un rectangle et affectation à la forme courante
        console.log(this.currEditingMode);
        switch (this.currEditingMode) {

            case 0:
                this.currentShape = new Rectangle(this.currColour, this.dragNdrop.xInit, this.dragNdrop.yInit
                    , 0, 0, this.currLineWidth);
                break;
            case 1:
                this.currentShape = new Line(this.currColour, this.dragNdrop.xInit, this.dragNdrop.yInit
                    , 0, 0, this.currLineWidth);
                break;
        }
        this.drawing.addShape(this.currentShape);
        drawPaint(this.ctx, this.drawing, this.canvas);
        //this.currentShape.paint(ctx, canvas);
    };

    onInteractionUpdate() {
        switch (this.currEditingMode) {
            case 0:
                this.currentShape = new Rectangle(this.currColour, this.dragNdrop.xInit, this.dragNdrop.yInit
                    , 0, 0, this.currLineWidth);
                break;
            case 1:
                this.currentShape = new Line(this.currColour, this.dragNdrop.xInit, this.dragNdrop.yInit
                    , 0, 0, this.currLineWidth);
                break;
        }
        this.drawing.addShape(this.currentShape);
        drawPaint(this.ctx, this.drawing, this.canvas);
    };

    onInteractionEnd() {

    };
}