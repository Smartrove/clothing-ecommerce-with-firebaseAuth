import { createAuthUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../styles/096 form-input.styles.scss";
import "../styles/097 button.styles.scss";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    //
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form action="" onSubmit={() => {}}>
        <label htmlFor="dname">Display Name</label>
        <input
          className="form-input"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          placeholder="enter name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="enter email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="enter password"
        />
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          placeholder=" confirm your password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
