import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUZvKsfPOQXWefNAReRVfHfO34EVIL1UQ",
  authDomain: "learning-firebase-3bdfe.firebaseapp.com",
  projectId: "learning-firebase-3bdfe",
  storageBucket: "learning-firebase-3bdfe.appspot.com",
  messagingSenderId: "1067689616356",
  appId: "1:1067689616356:web:93bd3964fa285d3e845df1"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const realTimeDb = app.database();
const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage, realTimeDb };
