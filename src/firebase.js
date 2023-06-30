import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqIJ9xtgWZzpHojiGWUr4DuQphncxowV8",
  authDomain: "disneyplus-clone015.firebaseapp.com",
  projectId: "disneyplus-clone015",
  storageBucket: "disneyplus-clone015.appspot.com",
  messagingSenderId: "829799481813",
  appId: "1:829799481813:web:5d4fa6d01b056683053d5c",
  measurementId: "G-JF3ESVY8CX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  // const storage = firebase.storage();

  export { auth, provider };
  export default db;