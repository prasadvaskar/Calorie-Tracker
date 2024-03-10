import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAST5SIwZ8oGymOU_PlATfThZ4BEsQuktY",
    authDomain: "calorietracker-b3b4a.firebaseapp.com",
    projectId: "calorietracker-b3b4a",
    storageBucket: "calorietracker-b3b4a.appspot.com",
    messagingSenderId: "345188770121",
    appId: "1:345188770121:web:d7ff22253b9ed707a4fa98",
    measurementId: "G-L89P89ZFK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();