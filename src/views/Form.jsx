import React from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {
  const { formValues, getInputProps, handleChange } = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" type="text" {...getInputProps("firstName")} />
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" type="text" {...getInputProps("lastName")} />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Form;
