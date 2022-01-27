# link :: https://www.udemy.com/course/curso-reactjs/learn/lecture/25604290#questions
* https://www.udemy.com/course/curso-reactjs/learn/lecture/25604308#questions/16311844

* Criando projeto
[x] npx create-react-app app-react
[x] npm i firebase@^8.8.1
[x] npm install react-router-dom@5.x
[x] npm uninstall react-router-dom 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2mvh1K4M9b9X9C-kV-wYr1RW4TBT6T4M",
  authDomain: "sistema-react-3e8d4.firebaseapp.com",
  projectId: "sistema-react-3e8d4",
  storageBucket: "sistema-react-3e8d4.appspot.com",
  messagingSenderId: "584210364257",
  appId: "1:584210364257:web:40311fc4f34c50ae34f720",
  measurementId: "G-NL32WM8GQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);