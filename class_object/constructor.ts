class Rectangle2 {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        console.log("construtor has been called.")
        this.width = width
        this.height = height
    }

    area(): number {
        return this.width * this.height
    }
}

let rect1: Rectangle2 = new Rectangle2(3, 4)
console.log(`Area of rect1: ${rect1.area()}`)
let rect2: Rectangle2 = new Rectangle2(6,5)

console.log(`Area of rect2: ${rect2.area()}`)