import React, { useState } from 'react';


function LoginForm() {
 const [formData, setFormData] = useState({
   username: '',
   password: '',
   city: '',
   webServer: '',
   role: '',
   singleSignOn: {
     mail: false,
     payroll: false,
     selfService: false,
   },
 });


 const handleChange = (e) => {
   const { name, value, type, checked } = e.target;


   if (type === 'checkbox') {
     setFormData((prevData) => ({
       ...prevData,
       singleSignOn: {
         ...prevData.singleSignOn,
         [name]: checked,
       },
     }));
   } else {
     setFormData((prevData) => ({ ...prevData, [name]: value }));
   }
 };


 const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Form Data:', formData);
   alert('Login submitted successfully!');
 };


 const handleReset = () => {
   setFormData({
     username: '',
     password: '',
     city: '',
     webServer: '',
     role: '',
     singleSignOn: {
       mail: false,
       payroll: false,
       selfService: false,
     },
   });
 };


 return (
   <div>
     <h2>Novell Services Login</h2>
     <form onSubmit={handleSubmit}>
       <label htmlFor="username">Username:</label>
       <input
         type="text"
         id="username"
         name="username"
         value={formData.username}
         onChange={handleChange}
         required
       />
       <br />
       <br />
       <label htmlFor="password">Password:</label>
       <input
         type="password"
         id="password"
         name="password"
         value={formData.password}
         onChange={handleChange}
         required
       />
       <br />
       <br />
       <label htmlFor="city">City of Employment:</label>
       <input
         type="text"
         id="city"
         name="city"
         value={formData.city}
         onChange={handleChange}
         required
       />
       <br />
       <br />
       <label htmlFor="webServer">Web server:</label>
       <select
         id="webServer"
         name="webServer"
         value={formData.webServer}
         onChange={handleChange}
         required
       >
         <option value="">-- Choose a server --</option>
         <option value="server1">Server 1</option>
         <option value="server2">Server 2</option>
         <option value="server3">Server 3</option>
       </select>
       <p>Please specify your role:</p>
       <label>
         <input
           type="radio"
           name="role"
           value="Admin"
           checked={formData.role === 'Admin'}
           onChange={handleChange}
         />
         Admin
       </label>
       <br />
       <label>
         <input
           type="radio"
           name="role"
           value="Engineer"
           checked={formData.role === 'Engineer'}
           onChange={handleChange}
         />
         Engineer
       </label>
       <br />
       <label>
         <input
           type="radio"
           name="role"
           value="Manager"
           checked={formData.role === 'Manager'}
           onChange={handleChange}
         />
         Manager
       </label>
       <br />
       <label>
         <input
           type="radio"
           name="role"
           value="Guest"
           checked={formData.role === 'Guest'}
           onChange={handleChange}
         />
         Guest
       </label>


       <p>Single Sign-on to the following:</p>
       <label>
         <input
           type="checkbox"
           name="mail"
           checked={formData.singleSignOn.mail}
           onChange={handleChange}
         />
         Mail
       </label>
       <br />
       <label>
         <input
           type="checkbox"
           name="payroll"
           checked={formData.singleSignOn.payroll}
           onChange={handleChange}
         />
         Payroll
       </label>
       <br />
       <label>
         <input
           type="checkbox"
           name="selfService"
           checked={formData.singleSignOn.selfService}
           onChange={handleChange}
         />
         Self-service
       </label>
       <div style={{ marginTop: '10px' }}>
         <button type="submit">Login</button>
         <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
           Reset
         </button>
       </div>
     </form>
   </div>
 );
}
