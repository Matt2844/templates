import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

let firebaseConfig = {
  apiKey: "AIzaSyDx9gjvRKnUK7pMQs9RMWDArZkf3XLvNO4",
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  firebaseConfig,
}