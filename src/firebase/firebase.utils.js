import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_CGxonI0dy4DVH9hOkeYNkke2sqSOfmY",
  authDomain: "crwn-db-72726.firebaseapp.com",
  projectId: "crwn-db-72726",
  storageBucket: "crwn-db-72726.appspot.com",
  messagingSenderId: "526231024737",
  appId: "1:526231024737:web:164df924aaa4885b202620",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;