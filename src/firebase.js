import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbWx0lmDT-4celiSP4nyBnjii4MJgMiXA",
  authDomain: "meeting-summarizer-dcb32.firebaseapp.com",
  projectId: "meeting-summarizer-dcb32",
  storageBucket: "meeting-summarizer-dcb32.appspot.com",
  messagingSenderId: "200606141592",
  appId: "1:200606141592:web:7ea4b01ae32739674a14ed"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
