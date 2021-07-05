import firebase from "firebase/app"
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDWUmJxiIfddyQRKlcovgrwd53mSIzqwsQ",
  authDomain: "chat-app-1adbb.firebaseapp.com",
  projectId: "chat-app-1adbb",
  storageBucket: "chat-app-1adbb.appspot.com",
  messagingSenderId: "481514114628",
  appId: "1:481514114628:web:15db2446a610bf0507f611",
  measurementId: "G-FHLC8J0BCN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
export {db,auth}
export default firebase;
