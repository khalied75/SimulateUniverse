import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdoPR4qV7oUb5T9Llvg7Ch9_Qnjjf-8KM",
  authDomain: "dbastronmy.firebaseapp.com",
  databaseURL: "https://dbastronmy-default-rtdb.firebaseio.com",
  projectId: "dbastronmy",
  storageBucket: "dbastronmy.firebasestorage.app",
  messagingSenderId: "79982729417",
  appId: "1:79982729417:web:4487cdcb9794f59fc79518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app;
