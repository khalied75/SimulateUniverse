import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEuv0_VFSR8nv3ftybcygw5JgTtVwx_0",
  authDomain: "simulateuniverse.firebaseapp.com",
  projectId: "simulateuniverse",
  storageBucket: "simulateuniverse.firebasestorage.app",
  messagingSenderId: "374217582183",
  appId: "1:374217582183:web:ba09fd8b5c1ac9b39196c2",
  measurementId: "G-8PQC9MNT4H"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
