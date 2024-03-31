import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9dtIoRSEqu7n0ALCF8yk_vPsJ5zHNz_s",
  authDomain: "blog-fb-971fc.firebaseapp.com",
  projectId: "blog-fb-971fc",
  storageBucket: "blog-fb-971fc.appspot.com",
  messagingSenderId: "20553510640",
  appId: "1:20553510640:web:941292fd8baa98384b5c35",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
