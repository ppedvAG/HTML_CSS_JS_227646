class Ball {
    constructor(element) {
        this.element = element;
        this.x = 0;
        this.y = 0;
        this.dx = 5;
        this.dy = 2;
        this.speedIncrement = 0.2;
    }

    updatePosition() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x < 0 || this.x + this.element.offsetWidth > this.element.parentElement.offsetWidth) {
            this.dx *= -1;
            this.increaseSpeed();
        }

        if(this.y < 0 || this.y + this.element.offsetHeight > this.element.parentElement.offsetHeight) {
            this.dy *= -1;
            this.increaseSpeed();
        }

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;

     
    }

    increaseSpeed() {
        this.dx += this.speedIncrement;
        this.dy += this.speedIncrement;
      }
}

const ballElement = document.querySelector(".ball");
const ball = new Ball(ballElement);

setInterval(() => {
    ball.updatePosition();
}, 16);