// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlqOD67rZ8rOK1wB2EIm0K8f0O2xTktFc",
    authDomain: "clone-77305.firebaseapp.com",
    projectId: "clone-77305",
    storageBucket: "clone-77305.appspot.com",
    messagingSenderId: "690093983535",
    appId: "1:690093983535:web:e50696d3f42a39d1ff43da",
    measurementId: "G-7F4Z8BVFYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth()
export { app, auth }

// [३:३६ PM, २/४/२०२३] Priyanshu Pawar Masai: npm install -g firebase-tools
// [३:३७ PM, २/४/२०२३] Priyanshu Pawar Masai: firebase login
// [३:३७ PM, २/४/२०२३] Priyanshu Pawar Masai: firebase init