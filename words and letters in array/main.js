var someArray = ["This", "is", "one", "of", "my", "arrays"];

function calcWords(array) {
    return array.length; // number of words
}
console.log("There are", calcWords(someArray), "words here");

function calcLetters(array) {
    return array.join("").length; //number of letters without " "
}
console.log("There are", calcLetters(someArray), "letters here");

function calcEachLetter(array) {
    var arrayToString = array.join("");
    var resultArray = {};
    for (i = 0; i < arrayToString.length; i++) {
        if (resultArray.hasOwnProperty(arrayToString[i])) {
            resultArray[arrayToString[i]]++;
        } else {
            resultArray[arrayToString[i]] = 1;
        }
    }
    return resultArray;
}

console.log(calcEachLetter(someArray)); 
/*
T: 1
h: 1
i: 2
s: 3
o: 2
n: 1
e: 1
f: 1
m: 1
y: 2
a: 2
r: 2
*/