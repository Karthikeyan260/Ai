'use client';

import { initializeApp, getApps, FirebaseApp, getApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
// Check if Firebase is already initialized
let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  if (typeof window !== 'undefined') {
      getAnalytics(app);
  }
} else {
  app = getApp(); // Get the existing app instance
}

export default app;

// Initialize Firebase Admin SDK for server-side
let admin: any;

if (typeof window === 'undefined') {
  try {
    admin = require('firebase-admin');
    if (admin.apps.length === 0) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_SERVICE_ACCOUNT || '');
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log('Firebase Admin SDK initialized successfully.');
    }
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
  }
}

export const serverApp = admin?.app();
