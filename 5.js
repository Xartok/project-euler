/*
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function smallestEvenlyDivisibleFromOneToTwenty() {
    const range = Array(20).join().split(",")
        // range 1-20
        .map(function(v, i) {
            return i + 1;
        });

    const predicate = (z) => range.every((x) => z % x === 0);

    let i = 20;

    while(!predicate(i)) {
        i++;
    }

    return i;
}

console.log(smallestEvenlyDivisibleFromOneToTwenty());
