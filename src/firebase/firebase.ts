'use client';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJM-etfwsw8zLayFEY6xZo0i5OjMPrpRE",
  authDomain: "ai-consultant-743ea.firebaseapp.com",
  projectId: "ai-consultant-743ea",
  storageBucket: "ai-consultant-743ea.firebasestorage.app",
  messagingSenderId: "381430105069",
  appId: "1:381430105069:web:c568304715bd9ade07dde4",
  measurementId: "G-7DF611DZDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
