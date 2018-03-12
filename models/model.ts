export class Shape {
    private _xInit:number;
    private _yInit:number;
    private _xFinal: number;
    private _yFinal: number;
    private _lineWidth:string|number;
    private _color:string;

    constructor(xInit:number,yInit:number, xFinal:number, yFinal:number, lineWidth: string|number, color:string ){
        this.xInit = xInit;
        this.yInit = yInit;
        this.xFinal = xFinal;
        this.yFinal = yFinal;
        this.lineWidth = lineWidth;
        this.color = color;

    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get lineWidth(): string | number {
        return this._lineWidth;
    }

    set lineWidth(value: string | number) {
        this._lineWidth = value;
    }
    get yFinal(): number {
        return this._yFinal;
    }

    set yFinal(value: number) {
        this._yFinal = value;
    }
    get xFinal(): number {
        return this._xFinal;
    }

    set xFinal(value: number) {
        this._xFinal = value;
    }
    get yInit(): number {
        return this._yInit;
    }

    set yInit(value: number) {
        this._yInit = value;
    }
    get xInit(): number {
        return this._xInit;
    }

    set xInit(value: number) {
        this._xInit = value;
    }
}


export class Rectangle extends Shape{}
export class Line extends Shape{}