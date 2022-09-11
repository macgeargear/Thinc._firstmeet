class Rectangle {
    width: number;
    height: number;

    area(): number {
        return this.width * this.height
    }
}

let rect: Rectangle = new Rectangle()
rect.width = 3;
rect.height = 4;

console.log(`Area of recr: ${rect.area()}`)