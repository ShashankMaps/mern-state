// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "moon-state.firebaseapp.com",
  projectId: "moon-state",
  storageBucket: "moon-state.appspot.com",
  messagingSenderId: "175838132945",
  appId: "1:175838132945:web:bcb940d1c08301c2a423f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);