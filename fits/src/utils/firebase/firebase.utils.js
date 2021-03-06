// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = { displayName: 'Michael' }
) => {
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createAuthUserFromEmailAndPassword(auth, email, password);
};
export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
