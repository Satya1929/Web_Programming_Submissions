import React from 'react';
function StringManipulator() {
 const str = 'madam';
 const reversedStr = str.split('').reverse().join('');
 const isPalindrome = str === reversedStr;


 return (
   <div>
     <p>Original String: {str}</p>
     <p>Reversed String: {reversedStr}</p>
     <p>{isPalindrome ? 'The string is a palindrome.' : 'The string is not a palindrome.'}</p>
   </div>
 );
}
