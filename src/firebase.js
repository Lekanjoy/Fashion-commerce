// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  apiKey: "AIzaSyB7QrkZOqQD-uBw0R9jwIKoYoKIaNPXyEw",
  authDomain: "lexy-store-react.firebaseapp.com",
  projectId: "lexy-store-react",
  storageBucket: "lexy-store-react.appspot.com",
  messagingSenderId: "67041657432",
  appId: "1:67041657432:web:64c52dc34c4ca773a2802d",
  measurementId: "G-ZK3V8GN8YM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

// sigIn Auth with email
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
// sigUp Auth with email
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
// SignOut Auth
export function logOut() {
  return signOut(auth);
}

// Signin with google redirect
export function signInWithGoogle() {
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

