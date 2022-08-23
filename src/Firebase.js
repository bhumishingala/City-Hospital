// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJdbK1HdAHWEkOaY9qFpMtWzpOZq7s4k",
  authDomain: "city-hospital-872c2.firebaseapp.com",
  projectId: "city-hospital-872c2",
  storageBucket: "city-hospital-872c2.appspot.com",
  messagingSenderId: "835957069022",
  appId: "1:835957069022:web:6ba0133c39814c59fbde4f",
  measurementId: "G-HV3F3PZYC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);