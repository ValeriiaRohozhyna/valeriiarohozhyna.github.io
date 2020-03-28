
function calcTriangleSquare (a, b, c) {
    var p;
    p = (a + b + c) / 2;
    return Math.round(Math.sqrt(p * (p - a) + (p - b) + (p - c)));
}

;
console.log("Triangle Square is about", calcTriangleSquare(8, 25, 16), "m2");
