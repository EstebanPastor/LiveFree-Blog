import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: process.env.FIREBASE_URI,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "nextjs13-blog.appspot.com",
  messagingSenderId: "35661224493",
  appId: "1:35661224493:web:8f4bc1d63146da42e676a4",
  measurementId: "G-YR78VVZYCJ",
};

export const app = initializeApp(firebaseConfig);


export default firebaseConfig;
