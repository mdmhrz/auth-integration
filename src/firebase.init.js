// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjc2uZO7rADpuEZOFoV3StU5XJQQlNYMI",
    authDomain: "auth-integration-8ef5c.firebaseapp.com",
    projectId: "auth-integration-8ef5c",
    storageBucket: "auth-integration-8ef5c.firebasestorage.app",
    messagingSenderId: "904327851594",
    appId: "1:904327851594:web:3e01f2031cdbc22c77c0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);