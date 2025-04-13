import React, { Component } from 'react';
class TemperatureConverter extends Component {
 constructor(props) {
   super(props);
   this.state = {
     temperature: '',
     scale: 'celsius',
   };
 }


 handleCelsiusChange = (e) => {
   this.setState({ temperature: e.target.value, scale: 'celsius' });
 };


 handleFahrenheitChange = (e) => {
   this.setState({ temperature: e.target.value, scale: 'fahrenheit' });
 };


 render() {
   const { temperature, scale } = this.state;
   const celsius =
     scale === 'fahrenheit' ? ((temperature - 32) * 5) / 9 : temperature;
   const fahrenheit =
     scale === 'celsius' ? (temperature * 9) / 5 + 32 : temperature;


   return (
     <div>
       <h2>Temperature Converter</h2>
       <div>
         <label>
           Celsius:
           <input
             type="number"
             value={scale === 'celsius' ? temperature : celsius.toFixed(2)}
             onChange={this.handleCelsiusChange}
           />
         </label>
       </div>
       <div>
         <label>
           Fahrenheit:
           <input
             type="number"
             value={scale === 'fahrenheit' ? temperature : fahrenheit.toFixed(2)}
             onChange={this.handleFahrenheitChange}
           />
         </label>
       </div>
     </div>
   );
 }
}
