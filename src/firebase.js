import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkcG5CbiyUwH4pRUGRgLkcurt960KPYns",
  authDomain: "clone-3e8b0.firebaseapp.com",
  databaseURL: "https://clone-3e8b0.firebaseio.com",
  projectId: "clone-3e8b0",
  storageBucket: "clone-3e8b0.appspot.com",
  messagingSenderId: "353033603219",
  appId: "1:353033603219:web:118a2c55cdcbcf82c1e566",
  measurementId: "G-Z5E5CPQYT3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
