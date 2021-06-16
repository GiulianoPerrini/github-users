import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNqrUwD_ILvBzZLQFxSZN-uNJIpF7TGds",
  authDomain: "github-users-c9ab9.firebaseapp.com",
  projectId: "github-users-c9ab9",
  storageBucket: "github-users-c9ab9.appspot.com",
  messagingSenderId: "574642476488",
  appId: "1:574642476488:web:c45ccb04c54589f735dcfd",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const gitAuthProvider = new firebase.auth.GithubAuthProvider();

export { db, gitAuthProvider, firebase };
