export class Drawing{

    private _shapes : Array<Shape>;

    constructor() {
        this._shapes = [];
    }

    addShape(shape : Shape) : void {
        this._shapes.push(shape);
    }

    removeShape(index:number) : void {
        if (index > -1) {
            this._shapes.splice(index, 1);
        }
    }

    get shapes(): Array<Shape> {
        return this._shapes;
    }

}

export class Shape {
    private _colour: string;
    private _thickness: number;

    constructor(colour: string, thickness: number) {
        this._colour = colour;
        this._thickness = thickness;
    }

    get colour(): string {
        return this._colour;
    }

    set colour(value: string) {
        this._colour = value;
    }

    get thickness(): number {
        return this._thickness;
    }

    set thickness(value: number) {
        this._thickness = value;
    }
}


export class Rectangle extends Shape {

    private _xCoordinate: number;
    private _yCoordinate: number;
    private _height: number;
    private _width: number;

    constructor(colour: string, thickness: number, xCoordinate: number, yCoordinate: number, height: number, widht: number) {
        super(colour, thickness);
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.height = height;
        this.width = widht;
    }

    get xCoordinate(): number {
        return this._xCoordinate;
    }

    set xCoordinate(value: number) {
        this._xCoordinate = value;
    }

    get yCoordinate(): number {
        return this._yCoordinate;
    }

    set yCoordinate(value: number) {
        this._yCoordinate = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    xCoordinateFinal () : number {
        return this.xCoordinate + this.width;
    };

    yCoordinateFinal() : number {
        return this.yCoordinate + this.height;
    };
}

export class Line extends Shape {

    private _xCoordinateInit: number;
    private _yCoordinateInit: number;
    private _xCoordinateFinal: number;
    private _yCoordinateFinal: number;

    constructor(colour: string, thickness: number, xCoordinateInit: number, yCoordinateInit: number, xCoordinateFinal: number, yCoordinateFinal: number) {
        super(colour, thickness);
        this.xCoordinateInit = xCoordinateInit;
        this.yCoordinateInit = yCoordinateInit;
        this.xCoordinateFinal = xCoordinateFinal;
        this.yCoordinateFinal = yCoordinateFinal;
    }

    get xCoordinateInit(): number {
        return this._xCoordinateInit;
    }

    set xCoordinateInit(value: number) {
        this._xCoordinateInit = value;
    }

    get yCoordinateInit(): number {
        return this._yCoordinateInit;
    }

    set yCoordinateInit(value: number) {
        this._yCoordinateInit = value;
    }

    get xCoordinateFinal(): number {
        return this._xCoordinateFinal;
    }

    set xCoordinateFinal(value: number) {
        this._xCoordinateFinal = value;
    }

    get yCoordinateFinal(): number {
        return this._yCoordinateFinal;
    }

    set yCoordinateFinal(value: number) {
        this._yCoordinateFinal = value;
    }


}