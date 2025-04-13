import React from 'react';


function StyledMessage() {
 const styles = {
   color: 'blue',
   fontSize: '24px',
   fontWeight: 'bold',
   textAlign: 'center',
 };
 return <p style={styles}>This is a styled message!</p>;
}
