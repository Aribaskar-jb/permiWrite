// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzr-XHEvtZw8aA_xNesZ05eSiE7WMYkJs",
  authDomain: "thmarch-e711b.firebaseapp.com",
  databaseURL: "https://thmarch-e711b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thmarch-e711b",
  storageBucket: "thmarch-e711b.appspot.com",
  messagingSenderId: "1012033507975",
  appId: "1:1012033507975:web:641ac96ad9a7456d3a9e22",
  measurementId: "G-FK90QTQYHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);