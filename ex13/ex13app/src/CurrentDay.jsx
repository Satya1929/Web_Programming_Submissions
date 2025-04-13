import React from 'react';
function CurrentDay() {
 const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const today = new Date();
 const currentDay = daysOfWeek[today.getDay()];


 return <p>Today is {currentDay}.</p>;
}
