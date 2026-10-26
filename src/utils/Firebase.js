// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6UPcpd_E3K9W2FjVFSFzjzyg10IW3meU",
  authDomain: "netflixgpt-dfbb6.firebaseapp.com",
  projectId: "netflixgpt-dfbb6",
  storageBucket: "netflixgpt-dfbb6.firebasestorage.app",
  messagingSenderId: "443108954123",
  appId: "1:443108954123:web:20ef40dd8bafd34d8e370e",
  measurementId: "G-DH8NT8K0M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();