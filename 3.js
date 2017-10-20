/*
 * What is the largest prime factor of the number 600851475143 ?
 */
 function largestPrimeFactor(n) {
 	const primeFactors = [];
 	for(let i = 2, sqrt = Math.floor(Math.sqrt(n)); i <= sqrt && n !== 1; i++) {
 		const modulo = n % i;
 		let division;
 		if(primeFactors.indexOf(modulo) !== -1) {
 			continue;
 		}
 		if(modulo == 0) {
 			division = n / i;
 			n = division;
 			primeFactors.push(i);
 		}
 	}

 	return primeFactors.reduce((max, factor) => Math.max(factor, max), 0);
 }

 console.log(largestPrimeFactor(600851475143));
