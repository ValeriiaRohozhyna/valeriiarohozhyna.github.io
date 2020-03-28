function calcMinElem(array) {
    var minElem = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < minElem) {
            minElem = array[i];
        }
    }
    return minElem;
}
var someArray = [10, 15, 14, 16, -15, -22, 11, 18, 14]
console.log("The minElem is: ", calcMinElem(someArray));