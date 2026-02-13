 
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-bae55.firebaseapp.com",
  projectId: "authexamnotes-bae55",
  storageBucket: "authexamnotes-bae55.firebasestorage.app",
  messagingSenderId: "485890069840",
  appId: "1:485890069840:web:75c12caf6d474afa86c855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}