// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyBakOhhDO3GNs504aeIBYmaydZiBrD7Crw",
//   authDomain: "xcene-portfolio.firebaseapp.com",
//   projectId: "xcene-portfolio",
//   storageBucket: "xcene-portfolio.appspot.com",
//   messagingSenderId: "280858158880",
//   appId: "1:280858158880:web:d3b4da48ae9fa59a951945",
//   measurementId: "G-F92S6BDRNC"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export {auth, provider};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-Z32CExTTTcsUDJFVlIIDZsyQfjLAiqc",
  authDomain: "xcene-portfolio-2.firebaseapp.com",
  projectId: "xcene-portfolio-2",
  storageBucket: "xcene-portfolio-2.appspot.com",
  messagingSenderId: "125740978835",
  appId: "1:125740978835:web:801532a0f5deb9613c3366",
  measurementId: "G-JXC5YH218L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};