import { useState } from "react";

const Form = ({ handleData, handleFormSubmit }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(true);
  };

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
    handleData({ name: value, mobile, email });
  };

  const handleMobile = (event) => {
    const value = event.target.value;
    setMobile(value);
    handleData({ name, mobile: value, email });
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    handleData({ name, mobile, email: value });
  };

  return (
    <div className="formContainerSection">
      <form className="formContainer" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={handleName}
        ></input>
        <label>Mobile</label>
        <input
          type="text"
          placeholder="Mobile No."
          value={mobile}
          onChange={handleMobile}
          required
        ></input>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
