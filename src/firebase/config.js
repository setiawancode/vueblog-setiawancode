import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1z8CneN3B_le73xNvLjyV0rGT0TqIxF4",
  authDomain: "vueblog-1a1a4.firebaseapp.com",
  projectId: "vueblog-1a1a4",
  storageBucket: "vueblog-1a1a4.appspot.com",
  messagingSenderId: "303972366293",
  appId: "1:303972366293:web:7ac1a4bf29e237390f2f5c",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
