import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDJc4q3SEltFt7m7hSOuYOfdg9MG4PJL_E",
    authDomain: "sol-peloc.firebaseapp.com",
    projectId: "sol-peloc",
    storageBucket: "sol-peloc.appspot.com",
    messagingSenderId: "16445648",
    appId: "1:16445648:web:ce6d2e47be76f429726ed5"
};

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)