import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCt_HcEzkoB74wsRMJ_QzhZ1F6wRWBGRlY",
    authDomain: "reactproject-b6084.firebaseapp.com",
    projectId: "reactproject-b6084",
    storageBucket: "reactproject-b6084.appspot.com",
    messagingSenderId: "357966174760",
    appId: "1:357966174760:web:75b17578d2452b2ce2f31d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);



