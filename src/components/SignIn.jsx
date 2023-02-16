import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log({ response });
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>Sign In</div>;
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In WIth Google Redirect
      </button>
    </>
  );
};

export default SignIn;
