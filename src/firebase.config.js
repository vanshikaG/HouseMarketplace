import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLWCkDcEkteqz53M4q3mnzvD5TVcnSsSY",
  authDomain: "house-marketplace-app-1c1eb.firebaseapp.com",
  projectId: "house-marketplace-app-1c1eb",
  storageBucket: "house-marketplace-app-1c1eb.appspot.com",
  messagingSenderId: "734056317288",
  appId: "1:734056317288:web:1381d5f543c53c80e9d6dd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
