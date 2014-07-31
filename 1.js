/**
 * Multiples of 3 and 5
 */
Array(999).join().split(",")
// range 1-999
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