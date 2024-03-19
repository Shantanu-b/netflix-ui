
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKAx_m7zK81QOJZo4vR13CpYzy5NT5p0w",
  authDomain: "netflix-clone-1f8fc.firebaseapp.com",
  projectId: "netflix-clone-1f8fc",
  storageBucket: "netflix-clone-1f8fc.appspot.com",
  messagingSenderId: "116308449472",
  appId: "1:116308449472:web:ec40e7a225ab5c736d3525",
  measurementId: "G-Q210NMWGH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app) 