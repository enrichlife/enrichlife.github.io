import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyByXUva5C7fyOyrj_gCCtIxo8s4wiL58uE",
  authDomain: "enrichlifepap.firebaseapp.com",
  databaseURL: "https://enrichlifepap-default-rtdb.firebaseio.com",
  projectId: "enrichlifepap",
  storageBucket: "enrichlifepap.appspot.com",
  messagingSenderId: "818829868579",
  appId: "1:818829868579:web:839128b3e4ff3e9376bb96"
};

 export const fb = firebase.initializeApp(firebaseConfig);
 export const db = firebase.firestore();
 export const storage = firebase.storage();
 