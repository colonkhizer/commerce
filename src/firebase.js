import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7OtBrzsz0lbNS8-f_cPDrjCm6BYS0zY8",
    authDomain: "commerce-c5f88.firebaseapp.com",
    databaseURL: "https://commerce-c5f88.firebaseio.com",
    projectId: "commerce-c5f88",
    storageBucket: "commerce-c5f88.appspot.com",
    messagingSenderId: "354789812779",
    appId: "1:354789812779:web:e746118d7e2e6a6e1c186e",
    measurementId: "G-XRWTTZEMJZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth }