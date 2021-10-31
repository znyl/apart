import * as firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/firestore/dist/esm/index';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBbsNtje_KcrlCNUV-8AiF1imA0miCoBQ",
    authDomain: "apartment-web.firebaseapp.com",
    projectId: "apartment-web",
    storageBucket: "apartment-web.appspot.com",
    messagingSenderId: "1064327497047",
    appId: "1:1064327497047:web:a3dd0b22fbf770436bea12"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore();