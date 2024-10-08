// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZV7taFCNWJSq-vQdPFlp0fYkyBrzR_ks",
    authDomain: "webclone-581b7.firebaseapp.com",
    projectId: "webclone-581b7",
    storageBucket: "webclone-581b7.appspot.com",
    messagingSenderId: "934204454708",
    appId: "1:934204454708:web:14aeb7f218ce5c8d4d9761"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
