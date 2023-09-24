import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//import { getStorage, ref} from 'firebase/storage';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCkN9Pxkn2ZXGhzPQ3Gur7s1v7DPnjkrA",
  authDomain: "testebd-24a21.firebaseapp.com",
  projectId: "testebd-24a21",
  storageBucket: "testebd-24a21.appspot.com",
  messagingSenderId: "75616532236",
  appId: "1:75616532236:web:452c1d27b7518ab6f77b29",
  measurementId: "G-77G24D59YT"
};

const app = initializeApp(firebaseConfig);

//Para usar o Firetore
const db = getFirestore(app);

//para fazer autenticacao
const auth = getAuth(app);

export { db, auth };
