// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH9YcGHNB68Nyikip2p-0dPk5PksQ3nnc",
    authDomain: "image-storage-94b36.firebaseapp.com",
    projectId: "image-storage-94b36",
    storageBucket: "image-storage-94b36.appspot.com",
    messagingSenderId: "29056094442",
    appId: "1:29056094442:web:2250c2eaf0bda41f3a0793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage }