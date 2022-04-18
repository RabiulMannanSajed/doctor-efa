// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaUzwW_FS-b0vAz1H5V4ik71NkZjLw8u0",
    authDomain: "dentist-efa.firebaseapp.com",
    projectId: "dentist-efa",
    storageBucket: "dentist-efa.appspot.com",
    messagingSenderId: "973741558137",
    appId: "1:973741558137:web:40f4a25483bdc1dcd547a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;