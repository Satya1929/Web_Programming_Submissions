import { useRef, useState } from "react";

function NewForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setSubmittedData({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
        />
      </label>
      <br />
      <br />
      <label>
        Email:{" "}
        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email"
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
      {submittedData && (
        <section>
          <h3>Preview:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </section>
      )}
    </form>
  );
}

export default NewForm;