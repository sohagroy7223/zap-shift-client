// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeLsyhDmkPZ5oFvWePJFpsoJRmMQmhqNA",
  authDomain: "zap-ship-46706.firebaseapp.com",
  projectId: "zap-ship-46706",
  storageBucket: "zap-ship-46706.firebasestorage.app",
  messagingSenderId: "651366157919",
  appId: "1:651366157919:web:363a70fa82b7dd668315ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
