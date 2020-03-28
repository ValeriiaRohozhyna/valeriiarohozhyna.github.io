function calcElements(array, elem) {
    var count = 0;
    if (array.includes(elem)) {
        for (i = 0; i < array.length; i++) {
            if (array[i] == elem) {
                count++; 
            }
        }
    }
    return count;
}
var names = ["Ray", "John", "Mary", "Ray", "John", "Nick", "Nick", "Ray"];
console.log(calcElements(names, "Ray"));
