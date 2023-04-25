// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCywCc515m7Mdd4bYqy9QiSG-9Lxahu9sw",
  authDomain: "hannie-dating-project.firebaseapp.com",
  projectId: "hannie-dating-project",
  storageBucket: "hannie-dating-project.appspot.com",
  messagingSenderId: "56979074780",
  appId: "1:56979074780:web:a3c73cbcd5faf9a9a44e19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);
