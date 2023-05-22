// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcAewDOkZWgwqyQYLJ09TrtRvyXA4oNhw",
  authDomain: "react-d704b.firebaseapp.com",
  projectId: "react-d704b",
  storageBucket: "react-d704b.appspot.com",
  messagingSenderId: "194872999142",
  appId: "1:194872999142:web:0be484bd57adaa92570f27",
  measurementId: "G-N6KG844FQT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);