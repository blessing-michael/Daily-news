// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDALI-j2209aLzE22bXh88iSoBoRzOMw0",
  authDomain: "daily-news-react.firebaseapp.com",
  projectId: "daily-news-react",
  storageBucket: "daily-news-react.appspot.com",
  messagingSenderId: "240523790008",
  appId: "1:240523790008:web:13b36cb93122fef271564d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()