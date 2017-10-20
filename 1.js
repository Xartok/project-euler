/**
 * Find the sum of all the multiples of 3 or 5 below 1000
 */
function multiplesOfThreeAndFiveBelowN(n) {
    return Array(n-1).join().split(",")
    // range 1-n-1
    .map(function(v, i) {
        return i + 1;
    })
    // multiple of 3 or 5
    .filter(function(v) {
        return v % 3 === 0 || v % 5 === 0;
    })
    // sum
    .reduce(function(a, b) {
        return a + b;
    }, 0);
}

console.log(multiplesOfThreeAndFiveBelowN(1000));