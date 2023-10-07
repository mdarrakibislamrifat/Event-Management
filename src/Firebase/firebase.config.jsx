// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG8N_vf1GaXYrAuP6PdiJCUA2FSLpWvDY",
  authDomain: "event-management-auth-a6ac6.firebaseapp.com",
  projectId: "event-management-auth-a6ac6",
  storageBucket: "event-management-auth-a6ac6.appspot.com",
  messagingSenderId: "81000306853",
  appId: "1:81000306853:web:27bb079cc37a6541dd154c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;