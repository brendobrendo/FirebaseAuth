// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3HPfKpfGRtA3XVfxMDP3ynyUI-1AlISU",
  authDomain: "fir-auth-6924c.firebaseapp.com",
  projectId: "fir-auth-6924c",
  storageBucket: "fir-auth-6924c.appspot.com",
  messagingSenderId: "1074385510610",
  appId: "1:1074385510610:web:5a837be19cfe6147ab0d0b"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);