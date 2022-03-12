import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0jmtfDVjj8X_3q_8cIedsdzS4MIrI_a4",
    authDomain: "todo-redux-a0d80.firebaseapp.com",
    projectId: "todo-redux-a0d80",
    storageBucket: "todo-redux-a0d80.appspot.com",
    messagingSenderId: "745070534160",
    appId: "1:745070534160:web:1b6747632723dc3070f495"
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();

  
export {db , auth,provider} ;


