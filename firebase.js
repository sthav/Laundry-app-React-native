
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2jj_5_2mgwb2JCxpLjwaRzg3ZQgIJTR8",
    authDomain: "laundry-application-fa8a3.firebaseapp.com",
    projectId: "laundry-application-fa8a3",
    storageBucket: "laundry-application-fa8a3.appspot.com",
    messagingSenderId: "634083056364",
    appId: "1:634083056364:web:2443f18f14dea4137ca3c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};