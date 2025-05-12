import { createContext, use, useContext } from "react";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
// import firebase from "firebase/compat/app";
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAHU64EqsaQA_qJ_qNsZ2hXZBPfx8xdvTY",
  authDomain: "booktrap-c13a8.firebaseapp.com",
  projectId: "booktrap-c13a8",
  storageBucket: "booktrap-c13a8.firebasestorage.app",
  messagingSenderId: "442357990667",
  appId: "1:442357990667:web:357d991445857f9d15ce0e",
};
export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const signInUser = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

const signUpWithEmailAndPassword = (email, password) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password);
};

const googleauthProvider = new GoogleAuthProvider();

const signinWithGoogle = () =>
  signInWithPopup(firebaseAuth, googleauthProvider);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log("User is signed in:", user);
      } else {
        setUser(null);
        console.log("No user is signed in.");
      }
    });
  }, []);

  const isLoggIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signUpWithEmailAndPassword,
        signInUser,
        signinWithGoogle,
        isLoggIn,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
