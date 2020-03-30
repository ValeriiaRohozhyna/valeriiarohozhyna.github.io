var someArray = ["This", "is", "one", "of",  "my", "arrays"];

function calcWords(array) {
    return array.length; // number of words
}
console.log("There are", calcWords(someArray), "words here");

function calcLetters(array) {
    return array.join("").length; //number of letters without " "
}
console.log("There are", calcLetters(someArray), "letters here");

