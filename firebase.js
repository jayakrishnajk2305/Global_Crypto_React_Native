// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq7cJ3Q3GWfBdSQBxoFl9ZULvD-hoPhBA",
  authDomain: "logindata-f9603.firebaseapp.com",
  projectId: "logindata-f9603",
  storageBucket: "logindata-f9603.appspot.com",
  messagingSenderId: "1086752029125",
  appId: "1:1086752029125:web:1e8ab8afa239519d0633ac"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };