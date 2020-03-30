function calcFibonacciArray(n) {
    var FibonacciArray = [1, 1];
    if (typeof (n) !== "number") {
        return console.log("N is not a number.");
    } else {
        for (i = 2; i < n; i++) {
            FibonacciArray.push(FibonacciArray[i - 1] + FibonacciArray[i - 2]);
        }
    }
    return FibonacciArray;
}

console.log(calcFibonacciArray(10));
console.log(calcFibonacciArray(15));
console.log(calcFibonacciArray("Hello World!"));
console.log(calcFibonacciArray(5));
console.log(calcFibonacciArray("Hello Somebody!"));