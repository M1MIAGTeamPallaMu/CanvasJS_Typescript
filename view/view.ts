import {Drawing, Line, Rectangle, Shape} from "../models/model";

export function drawPaint(ctx: CanvasRenderingContext2D, draw: Drawing, canvas) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(let shapeElement of draw.shapes){
        this.shapePaint(ctx, shapeElement);
        if (shapeElement instanceof Rectangle) {
            this.rectPaint(ctx, shapeElement);
        } else if( shapeElement instanceof Line) {
            this.linePaint(ctx, shapeElement);
        }
    }
}

export function shapePaint(ctx: CanvasRenderingContext2D, shape: Shape) {
    ctx.beginPath();
    ctx.lineWidth = shape.thickness;
    ctx.strokeStyle = shape.colour;
}

export function rectPaint(ctx: CanvasRenderingContext2D, shape: Rectangle) {
    ctx.rect(shape.xCoordinate, shape.yCoordinate, shape.xCoordinateFinal(), shape.yCoordinateFinal());
    ctx.stroke();
}

export function linePaint(ctx: CanvasRenderingContext2D, shape: Line) {
    ctx.beginPath();
    ctx.moveTo(shape.xCoordinateInit, shape.yCoordinateInit);
    ctx.lineTo(shape.xCoordinateFinal, shape.yCoordinateFinal);
    ctx.stroke();
}
