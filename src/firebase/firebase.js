import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDCU0FNWHaK0pJUOO4RS8Z6lg-32RqvF5s",
  authDomain: "smartwallet-6cf71.firebaseapp.com",
  databaseURL: "https://smartwallet-6cf71.firebaseio.com",
  projectId: "smartwallet-6cf71",
  storageBucket: "smartwallet-6cf71.appspot.com",
  messagingSenderId: "858328572253"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  auth,
  db
};
