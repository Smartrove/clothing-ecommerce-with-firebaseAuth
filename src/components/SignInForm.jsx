import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { useState } from "react";
import FormInputs from "./FormInputs";
import "../styles/signUpForm.styles.scss";
import Button from "./Button";
import GoogleIcon from "@mui/icons-material/Google";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  console.log(formField);
  const { email, password } = formField;

  //to empty the form-fields after submission
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      //to empty the form-fields after submission
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("user not found");
          break;
        default:
          console.log(err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <h3>Sign In With Your Email and Password</h3>
      <form action="" onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            <GoogleIcon color="inherit" />
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
