// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDZ2LIDYgzlfiXoTvCe2ImgP7V46gyevA",
  authDomain: "gpt-req-res.firebaseapp.com",
  projectId: "gpt-req-res",
  storageBucket: "gpt-req-res.appspot.com",
  messagingSenderId: "995608000114",
  appId: "1:995608000114:web:8019e924f04d96c8a034eb"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}