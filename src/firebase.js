import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOSg6a2RqL8Llea1t5yb0ZnFNa54C72ok",
  authDomain: "resto-756bb.firebaseapp.com",
  projectId: "resto-756bb",
  storageBucket: "resto-756bb.appspot.com",
  messagingSenderId: "539690273874",
  appId: "1:539690273874:web:96c3a02abecdf1496a238b",
  measurementId: "G-YCVM5XNRCM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
