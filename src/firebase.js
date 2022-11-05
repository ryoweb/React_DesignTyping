//此方がproject[designtyping]のfirebase
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC5X7omnoXWYarl0b4-la_xEtAZSkqm9mg",
//   authDomain: "designtyping.firebaseapp.com",
//   projectId: "designtyping",
//   storageBucket: "designtyping.appspot.com",
//   messagingSenderId: "344559160476",
//   appId: "1:344559160476:web:ce550b5094695ccf3cf159"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
//chatで作ったfirebaseのproject
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

export {db, auth};