import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApCgocVaPAdd9rzMMjQBs8jnT_pLzClpY",
  authDomain: "twitter-clone-91294.firebaseapp.com",
  databaseURL: "https://twitter-clone-91294.firebaseio.com",
  projectId: "twitter-clone-91294",
  storageBucket: "twitter-clone-91294.appspot.com",
  messagingSenderId: "1000634530524",
  appId: "1:1000634530524:web:dafdfc0a061102d0ac1219",
  measurementId: "G-YG83B57327",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
