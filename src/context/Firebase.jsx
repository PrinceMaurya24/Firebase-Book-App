import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAHU64EqsaQA_qJ_qNsZ2hXZBPfx8xdvTY",
  authDomain: "booktrap-c13a8.firebaseapp.com",
  projectId: "booktrap-c13a8",
  storageBucket: "booktrap-c13a8.firebasestorage.app",
  messagingSenderId: "442357990667",
  appId: "1:442357990667:web:357d991445857f9d15ce0e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
