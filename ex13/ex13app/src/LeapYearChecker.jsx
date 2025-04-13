import React from 'react';
function LeapYearChecker() {
 const year = 2024;
 const isLeapYear =
   (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
 return (
   <p>
     The year {year} is {isLeapYear ? 'a leap year.' : 'not a leap year.'}
   </p>
 );
}
