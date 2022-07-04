// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBE0MwhCGGZWsjciKbiYkCcjmBoUKjjQZg',
  authDomain: 'fits-5f0d3.firebaseapp.com',
  projectId: 'fits-5f0d3',
  storageBucket: 'fits-5f0d3.appspot.com',
  messagingSenderId: '702577732258',
  appId: '1:702577732258:web:e3ffae3dcb7422cd1d45fb',
  measurementId: 'G-LZGMHJWF5V',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Set up google auth params
const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
