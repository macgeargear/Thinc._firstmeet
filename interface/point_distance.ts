interface Point {
    x: number;
    y: number;
}

function distance(p1: Point, p2: Point): number {
    return Math.sqrt(Math.pow(p2.x-p1.x,2) + Math.pow(p2.y-p1.y,2))
}

let p1: Point = { x:1, y: 3}
let p2: Point = { x:-3, y:5}

console.log(`p1: (${p1.x}, ${p1.y})`)
console.log(`p2: (${p2.x}, ${p2.y})`)
console.log(`Distance: ${distance(p1, p2)}`)