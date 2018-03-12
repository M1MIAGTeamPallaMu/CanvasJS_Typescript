export class DnD{
    private _canvas;
    private _interactor;
    private _xInit : number;
    private _yInit : number;
    private _xFinal : number;
    private _yFinal : number;
    private _pressed : boolean;

    constructor (canvas, interactor?) {
        this.canvas = canvas;
        this.interactor = interactor;
    }
    initCoordinates() : void {
        this.xInit = 0;
        this.yInit = 0;
        this.xFinal = 0;
        this.yFinal = 0;
    }

    select(evt : {x, y}) : void {
        this.xInit = DnD.getMousePosition(this.canvas, evt).newX;
        this.yInit = DnD.getMousePosition(this.canvas, evt).newY;
        console.log(this.xInit, this.yInit);
        this.pressed = true;
    }

    move(evt : {x, y}) : void {
        if(this.pressed){
            this.xFinal = DnD.getMousePosition(this.canvas, evt).newX;
            this.yFinal = DnD.getMousePosition(this.canvas, evt).newY;
            console.log(this.xFinal, this.yFinal);
        }
    }

    release(evt : {x, y}) : void {
        this.xFinal = DnD.getMousePosition(this.canvas, evt).newX;
        this.yFinal = DnD.getMousePosition(this.canvas, evt).newY;
        this.pressed = false;
    }

    public static getMousePosition(canvas, evt: {x, y}){
        let rect = canvas.getBoundingClientRect();
        return {
            newX : evt.x - rect.left,
            newY : evt.y - rect.top
        }
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

    get canvas() {
        return this._canvas;
    }

    set canvas(value) {
        this._canvas = value;
    }
    get interactor() {
        return this._interactor;
    }

    set interactor(value) {
        this._interactor = value;
    }

    get pressed(): boolean {
        return this._pressed;
    }

    set pressed(value: boolean) {
        this._pressed = value;
    }

}