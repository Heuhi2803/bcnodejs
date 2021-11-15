// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbOJDxuXTtAmO6sYoL0x0wiobOrYeomsI",
  authDomain: "shop-noithat.firebaseapp.com",
  projectId: "shop-noithat",
  storageBucket: "shop-noithat.appspot.com",
  messagingSenderId: "1087166188733",
  appId: "1:1087166188733:web:52fad68abb575c368a7bd4",
  measurementId: "G-D62D426MQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
