import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBcMWEA0ou5ukBpsAmMcpltWeERKkuM-x8",
  authDomain: "desafio-03-aws-react-bf7b2.firebaseapp.com",
  projectId: "desafio-03-aws-react-bf7b2",
  storageBucket: "desafio-03-aws-react-bf7b2.firebasestorage.app",
  messagingSenderId: "295937981763",
  appId: "1:295937981763:web:e6349aa93a348e113183f6",
  measurementId: "G-B2LT7HGZ3Q"
};

export const app = initializeApp(firebaseConfig);
getAnalytics(app);