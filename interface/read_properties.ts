interface Circle {
    radius: number,
     color: string
}

let circle: Circle = {
    radius: 5,
    color: "Red"
}

console.log(`A ${circle.color} circle has radius of ${circle.radius}.`)

circle.radius = 6;
circle.color = "Green"

console.log(`A ${circle.color} circle has radius of ${circle.radius}`)