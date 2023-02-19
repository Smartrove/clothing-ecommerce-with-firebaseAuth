import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase";
import SignUpForm from "./SignUpForm";

const SignIn = () => {
  //this code is useful for another signIn method.
  // useEffect(() => {
  //   try {
  //     const getResponse = async () => {
  //       const response = await getRedirectResult(auth);
  //       // console.log({ response });

  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     getResponse();
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>Sign In</div>
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In WIth Google Redirect
      </button> */}
    </>
  );
};

export default SignIn;
