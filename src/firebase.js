import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNUHa8ivAsjyl11eTRuAVUbhc2gJx29aU",
  authDomain: "meeting-summarizer-2f9e3.firebaseapp.com",
  projectId: "meeting-summarizer-2f9e3",
  storageBucket: "meeting-summarizer-2f9e3.appspot.com",
  messagingSenderId: "795130178287",
  appId: "1:795130178287:web:827c4ce56917b9263c491a",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
