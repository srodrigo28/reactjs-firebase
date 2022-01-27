import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyA2mvh1K4M9b9X9C-kV-wYr1RW4TBT6T4M",
    authDomain: "sistema-react-3e8d4.firebaseapp.com",
    projectId: "sistema-react-3e8d4",
    storageBucket: "sistema-react-3e8d4.appspot.com",
    messagingSenderId: "584210364257",
    appId: "1:584210364257:web:40311fc4f34c50ae34f720",
    measurementId: "G-NL32WM8GQM"
  };
if(!firebase.apps.length){ // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
export default firebase;