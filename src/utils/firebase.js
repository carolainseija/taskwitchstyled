// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuDdjVbnsysAomTcwRL6HEn6BVRi6bows",
  authDomain: "tareas-7b777.firebaseapp.com",
  projectId: "tareas-7b777",
  storageBucket: "tareas-7b777.appspot.com",
  messagingSenderId: "814769710238",
  appId: "1:814769710238:web:47dbcd635d0cb768e7478f",
  measurementId: "G-333RLK7GT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);