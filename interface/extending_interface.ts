interface Point2D {
    x: number;
    y:number;
}

interface Point3D extends Point2D {
    z: number
}

let p_1: Point3D = {
    x: -1,
    y: 0,
    z: 3
}

let p_2: Point2D = {
    x:2,
    y:6
}

console.log("3D point", p_1)
console.log("2D point", p_2)

