// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBdt_4jyw5Ps2tgxVB6wf9mdYFq8lg4sA",
  authDomain: "react-question-cdaa5.firebaseapp.com",
  databaseURL: "https://react-question-cdaa5-default-rtdb.firebaseio.com",
  projectId: "react-question-cdaa5",
  storageBucket: "react-question-cdaa5.appspot.com",
  messagingSenderId: "897726814348",
  appId: "1:897726814348:web:06fb6bd4309437c30943a9",
  measurementId: "G-MK5RJBFQCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;