import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    // Your web app's Firebase configuration
  apiKey: "AIzaSyAZDKLPUCQ3DcozZPpcTSGip9cOXCAl1NM",
  authDomain: "m-city-bee7b.firebaseapp.com",
  databaseURL: "https://m-city-bee7b.firebaseio.com",
  projectId: "m-city-bee7b",
  storageBucket: "",
  messagingSenderId: "1083065537555",
  appId: "1:1083065537555:web:3525105a73252296"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);