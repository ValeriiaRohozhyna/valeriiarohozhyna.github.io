var someArray = [3, 4, 12, 16, 22, 31, 55, 6, 12, 50];
console.log("Our array is:", someArray);

function makeEvenArray(array) {
    var newArray = [];
    for(i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

console.log("Our even array is:",makeEvenArray(someArray));

function makeOddArray(array) {
    var newArray = [];
    for(i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

console.log("Our odd array is:",makeOddArray(someArray));