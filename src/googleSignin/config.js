import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBakOhhDO3GNs504aeIBYmaydZiBrD7Crw",
  authDomain: "xcene-portfolio.firebaseapp.com",
  projectId: "xcene-portfolio",
  storageBucket: "xcene-portfolio.appspot.com",
  messagingSenderId: "280858158880",
  appId: "1:280858158880:web:d3b4da48ae9fa59a951945",
  measurementId: "G-F92S6BDRNC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};