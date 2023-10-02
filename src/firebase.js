// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBgdAiFWC2GsF6VoyqGl0dEnQw3i7ng0rQ',
    authDomain: 'copytwitter-b72a6.firebaseapp.com',
    projectId: 'copytwitter-b72a6',
    storageBucket: 'copytwitter-b72a6.appspot.com',
    messagingSenderId: '486149918109',
    appId: '1:486149918109:web:972d26916e72fa42db3374',
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();