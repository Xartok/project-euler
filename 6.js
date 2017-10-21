/*
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
function main(n) {
    const numbers = Array(n).join().split(",")
        // range 1-n
        .map(function(v, i) {
           return i + 1;
        });

    const squares = numbers.map((x) => square(x));
    const sumOfSquares = squares.reduce((a, b) => a + b);

    const sumOfNumbers = numbers.reduce((a, b) => a + b);
    const squareOfSum = square(sumOfNumbers);

    return Math.abs(sumOfSquares - squareOfSum);
}

// much more efficient
function main2(n) {
    const sumOfSquares = n * (n + 1) * (2 * n + 1) / 6;
    const squareOfSum = square(n * (n + 1) / 2);

    return Math.abs(sumOfSquares - squareOfSum);
}

function square(n) {
    return Math.pow(n, 2);
}

console.log(main(1000000));
console.log(main2(1000000));