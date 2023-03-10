import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

 export const firebaseConfig = {
   apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
   authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
   measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID,
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


// sigUp Auth with email
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
// sigIn Auth with email
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
// SignOut Auth
export function logOut() {
  return signOut(auth);
}

// Signin with google redirect
export function signInWithGoogleRedirect() {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
}

// sigin with google popup
export function signInWithGooglePopup() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}



// Custom Hook for Current User
export function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return user;
}

