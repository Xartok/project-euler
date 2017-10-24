/*
 * What is the 10 001st prime number
 */
function isPrime(n) {
    if (n === 1) {
        return false;
    }

    for(let i = 2, sqrt = Math.floor(Math.sqrt(n)); i <= sqrt && n !== 1; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

function nthPrimeNumber(n) {
    let numPrimeNumber = 0;
    let result = 2;

    for(let i = 2; numPrimeNumber < n; i++) {
        if(isPrime(i)) {
            result = i;
            numPrimeNumber++;
        }
    }

    return result;
}

console.log(nthPrimeNumber(10001));