// TODO => configuracion de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATPVWmiJJ5IuQakdw4THpnp9ka81Hn7G0",
  authDomain: "fincastdea-f163a.firebaseapp.com",
  projectId: "fincastdea-f163a",
  storageBucket: "fincastdea-f163a.firebasestorage.app",
  messagingSenderId: "8652154362",
  appId: "1:8652154362:web:e8cd482868c5e782a33043",
  measurementId: "G-5GT7LHWW1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
