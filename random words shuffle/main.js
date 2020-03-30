var array = ["Hello", "This", "Is", "My", "Beautiful", "World"];

var shuffleArray = array.sort(function (a,b) {
    return 0.5 - Math.random();
});

console.log(shuffleArray);

