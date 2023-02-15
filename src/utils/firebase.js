import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Shw5kdMOv1itbbRADAKjcLLJPZmur24",
  authDomain: "react-ecommerce-auth.firebaseapp.com",
  projectId: "react-ecommerce-auth",
  storageBucket: "react-ecommerce-auth.appspot.com",
  messagingSenderId: "1038950250352",
  appId: "1:1038950250352:web:c19988d5bd90dba596c1b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //get userDocRef into the db
  const userSnapShot = await getDoc(userDocRef);

  //if user doesnt exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      const setDocumentInDatabase = await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err.message);
    }

    return userDocRef;
  }

  //check if user data exists

  //return userDocRef
};
