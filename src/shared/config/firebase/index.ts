import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBNInDswrqXd0NGr3KWVj3ejf0jQzMeczE",
  authDomain: "auth-or-web-telegram.firebaseapp.com",
  projectId: "auth-or-web-telegram",
  storageBucket: "auth-or-web-telegram.appspot.com",
  messagingSenderId: "193998862623",
  appId: "1:193998862623:web:8fbad42ef0dd24a0d7182a",
  measurementId: "G-831MPL7HMR"
});

const auth = getAuth(app);
export default auth;