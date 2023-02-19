import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import { useState } from "react";
import FormInputs from "./FormInputs";
import "../styles/signUpForm.styles.scss";
import Button from "./Button";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  console.log(formField);
  const { displayName, email, password, confirmPassword } = formField;

  //to empty the form-fields after submission
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //check if password match
    if (password !== confirmPassword) {
      alert("password mismatch");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });

      //to empty the form-fields after submission
      resetFormFields();

      console.log(user);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log(err.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInputs
          label="Display Name"
          className="form-input"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInputs
          label="Email"
          className="form-input"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInputs
          label="Password"
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInputs
          label="Confirm Password"
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
