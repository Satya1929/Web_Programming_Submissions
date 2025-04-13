import React, { useState } from 'react';
function RandomNumberGenerator() {
 const [randomNumber, setRandomNumber] = useState(null);
 const handleClick = () => {
   const num = Math.floor(Math.random() * 100) + 1;
   setRandomNumber(num);
 };


 return (
   <div>
     <h2>Random Number Generator</h2>
     <button onClick={handleClick}>Generate Random Number</button>
     {randomNumber && <p>Generated Number: {randomNumber}</p>}
   </div>
 );
}
