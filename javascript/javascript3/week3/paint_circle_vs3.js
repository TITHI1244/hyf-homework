const canvas = document.getElementById("my-canvas");
canvas.style.width = window.screen.width + "px";
canvas.style.height = window.screen.height + "px";

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
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawCircle(event) {
    const x = event.clientX;
    const y = event.clientY;
    const randomR = Math.floor(Math.random() * 15);
    const randomColor = getRandomColor();
    const randomCircle = new Circle(x, y, randomR, 0, 2 * Math.PI, randomColor);
    randomCircle.draw();
}

document.body.addEventListener("mousemove", drawCircle);