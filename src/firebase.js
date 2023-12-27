// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4PdwN_wMVCvsvwDLLYhfhT2CLP2YhQ9Q",
    authDomain: "multitodobyabrar.firebaseapp.com",
    projectId: "multitodobyabrar",
    storageBucket: "multitodobyabrar.appspot.com",
    messagingSenderId: "641925820042",
    appId: "1:641925820042:web:f2260db6bea9a4651fc773",
    measurementId: "G-6RLL82WE0L"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

