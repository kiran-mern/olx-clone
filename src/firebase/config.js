import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqglwIJE9Wazj8aLfTo9BakpuPKvuEgYg",
    authDomain: "fir-8e1a0.firebaseapp.com",
    projectId: "fir-8e1a0",
    storageBucket: "fir-8e1a0.appspot.com",
    messagingSenderId: "540670399434",
    appId: "1:540670399434:web:04ea860609fded7640b533",
    measurementId: "G-F0M2S5329D"
  };

  export const Firebase = initializeApp(firebaseConfig);
  export const auth = getAuth(Firebase);
 export const firestore=getFirestore(Firebase)
 export const storage=getStorage(Firebase)