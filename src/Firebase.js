// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCJJjhzzdEWEtmLGvEzECU9TzjTV-6yG8U",
  authDomain: "disney-clone-test-d8da1.firebaseapp.com",
  projectId: "disney-clone-test-d8da1",
  storageBucket: "disney-clone-test-d8da1.appspot.com",
  messagingSenderId: "739990483005",
  appId: "1:739990483005:web:30613c00ffeb489b83ba54",
  measurementId: "G-6SZK6KJJG9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;
