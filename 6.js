/*
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
function main(n) {
    const numbers = Array(n).join().split(",")
        // range 1-n
        .map(function(v, i) {
           return i + 1;
        });

    const squares = numbers.map((x) => x * x);
    const sumOfSquares = squares.reduce((a, b) => a + b);

    const sumOfNumbers = n * (n + 1) / 2;
    const squareOfSum = sumOfNumbers * sumOfNumbers;

    return Math.abs(sumOfSquares - squareOfSum);
}

 console.log(main(100));