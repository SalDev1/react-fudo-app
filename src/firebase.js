import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDLJvObJi96lAHN2PvjpssaLQLgy2Lxbug",
  authDomain: "fudo-app.firebaseapp.com",
  projectId: "fudo-app",
  storageBucket: "fudo-app.appspot.com",
  messagingSenderId: "272564655717",
  appId: "1:272564655717:web:8a2962d9fe5b074b45188c",
  measurementId: "G-JM96538HTF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
