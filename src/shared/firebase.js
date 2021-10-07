import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB96e9gR9Wy4u0N7zEoxn5GJbeDYnZPHdY",
    authDomain: "mild-70fbd.firebaseapp.com",
    projectId: "mild-70fbd",
    storageBucket: "mild-70fbd.appspot.com",
    messagingSenderId: "110364174180",
    appId: "1:110364174180:web:ce35f08da7977ba2a43c71",
    measurementId: "G-78D1QK83T4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};