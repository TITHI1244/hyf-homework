let canvas1 = document.getElementById("my-canvas1");
let ctx = canvas1.getContext("2d");
ctx.beginPath();
ctx.arc(150, 75, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

let canvas2 = document.getElementById("my-canvas2");
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        let ctx = canvas2.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "yellow");
c1.draw();
const c2 = new Circle(150, 50, 20, 0, 2 * Math.PI, "red");
c2.draw();
const c3 = new Circle(250, 50, 20, 0, 2 * Math.PI, "green");
c3.draw();