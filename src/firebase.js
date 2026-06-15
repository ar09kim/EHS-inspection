import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXjVx7Y6HS5uki3l6z7pSs_61tz8gAqkI",
  authDomain: "ehs-inspection-f86ae.firebaseapp.com",
  projectId: "ehs-inspection-f86ae",
  storageBucket: "ehs-inspection-f86ae.firebasestorage.app",
  messagingSenderId: "178919787509",
  appId: "1:178919787509:web:5523869e51dadbf3652ebc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
