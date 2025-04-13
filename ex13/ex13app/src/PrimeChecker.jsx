import React from 'react';
function isPrime(num) {
 if (num <= 1) return false;
 for (let i = 2; i <= Math.sqrt(num); i++) {
   if (num % i === 0) return false;
 }
 return true;
}


function PrimeChecker() {
 const number = 29;
 const result = isPrime(number) ? 'is a prime number' : 'is not a prime number';


 return <p>The number {number} {result}.</p>;
}
