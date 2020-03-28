var someArray = [10, 15, 14, 16, -15, -22, 11, 18, 14, 36];

function calcMinElem(array) {
    var minElem = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < minElem) {
            minElem = array[i];
        }
    }
    return minElem;
};

console.log("The minElem is: ", calcMinElem(someArray));

function calcMaxElem(array) {
    var maxElem = array[0];
    for(i = 1; i < array.length; i++) {
        if(array[i] > maxElem) {
            maxElem = array[i];
        }
    }
    return maxElem;
};

console.log("The maxElem is: ", calcMaxElem(someArray));