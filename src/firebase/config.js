import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpJerlWcrbM6etEgrDyhvDd0BLnKg_P6Y",
  authDomain: "books-exchange-app.firebaseapp.com",
  projectId: "books-exchange-app",
  storageBucket: "books-exchange-app.appspot.com",
  messagingSenderId: "476491394531",
  appId: "1:476491394531:web:97f217f2aac983ac5bc4d6",
};
initializeApp(firebaseConfig);
const projectFirestore = getFirestore();
const projectAuth = getAuth();

export { projectFirestore, projectAuth };
