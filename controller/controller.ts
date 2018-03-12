import {DnD} from "../models/interaction";

export class controller {
    private _editingMode = {rect: 0, line: 1};
    private _currEditingMode: number | SVGLineElement;
    private _currLineWidth: number;
    private _currColour: string;
    private _currentShape: number;
    private dragNdrop: DnD;

    pencil(ctx, drawing, canvas) {
        this._currEditingMode = this._editingMode.line;
        this._currLineWidth = 5;
        this._currColour = '#000000';
        this._currentShape = 0;
        // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
        this.dragNdrop = new DnD(canvas, this);
    };

    onInteractionStart(dnd:DnD){
    };

    onInteractionUpdate(dnd:DnD){

    };

    onInteractionEnd(dnd:DnD){

    };

    get editingMode(): { rect: number; line: number } {
        return this._editingMode;
    }

    set editingMode(value: { rect: number; line: number }) {
        this._editingMode = value;
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

    get currentShape(): number {
        return this._currentShape;
    }

    set currentShape(value: number) {
        this._currentShape = value;
    }
}