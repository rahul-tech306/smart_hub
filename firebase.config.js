
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAeYYvraymyMBIIEDtJIAlwC0R6r5XpWGw",
    authDomain: "otp-project-19394.firebaseapp.com",
    projectId: "otp-project-19394",
    storageBucket: "otp-project-19394.firebasestorage.app",
    messagingSenderId: "773399797158",
    appId: "1:773399797158:web:3ae76ed412e921b0548367",
    measurementId: "G-JB4B7MFPDL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
