// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5T39H8UOBdPXXarwUY_LScAjNRRSXfS4",
    authDomain: "crwn-clothing-48197.firebaseapp.com",
    projectId: "crwn-clothing-48197",
    storageBucket: "crwn-clothing-48197.appspot.com",
    messagingSenderId: "783595691350",
    appId: "1:783595691350:web:340db95f12111460634af7",
    measurementId: "G-H4LMNHNSQD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;