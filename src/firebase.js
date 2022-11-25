import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuuIbqrtUw-JirBNV4CGMrMg0SlE8_Uuc",
    authDomain: "realtimechat-d6487.firebaseapp.com",
    databaseURL: "https://realtimechat-d6487-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtimechat-d6487",
    storageBucket: "realtimechat-d6487.appspot.com",
    messagingSenderId: "1045162315461",
    appId: "1:1045162315461:web:6fe4514566ce20ac972aac"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };