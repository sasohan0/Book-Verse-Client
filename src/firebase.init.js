// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurP3mxPajJNpLVFeIz5rCYOFcX0hO2aE",
  authDomain: "book-verse-8b615.firebaseapp.com",
  projectId: "book-verse-8b615",
  storageBucket: "book-verse-8b615.appspot.com",
  messagingSenderId: "577593839016",
  appId: "1:577593839016:web:1ea66cc1a0d64dd1dce19d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
