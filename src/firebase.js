// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkiNOq5Ff73cSMnm6hctwfFI-2CHUY-kE",
  authDomain: "auth-walkin-dev.firebaseapp.com",
  projectId: "auth-walkin-dev",
  storageBucket: "auth-walkin-dev.appspot.com",
  messagingSenderId: "1033103474706",
  appId: "1:1033103474706:web:9259b36967ab7d575318cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app