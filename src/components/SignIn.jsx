import "../styles/signIn.styles.scss";
// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../utils/firebase";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

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

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In WIth Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
