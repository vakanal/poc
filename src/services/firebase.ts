import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQl_asfVDrs_ivgAomnXEpVUV7AFjAX24",
  appId: "1:905664519256:web:bc4c3eb3847bf081",
  authDomain: "instacool-671c8.firebaseapp.com",
  databaseURL: "https://instacool-671c8.firebaseio.com",
  messagingSenderId: "905664519256",
  projectId: "instacool-671c8",
  storageBucket: "instacool-671c8.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
