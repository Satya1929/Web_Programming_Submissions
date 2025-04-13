import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Name:", name);
    console.log("Submitted Email:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Email: 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
      <button type="submit">Submit</button>
      <section>
        <h3>Preview:</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </section>
    </form>
  );
}

export default Form;