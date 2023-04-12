import {
  React, createContext, useContext,
  // useEffect,
  useState
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from 'firebase/auth';
import { auth } from '../index';

export const userAuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserAuthContextProvider ({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});

  function logIn (email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp (email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut () {
    return signOut(auth);
  }
  function googleSignIn () {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function setUpRecaptha (number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        setUpRecaptha
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth () {
  return useContext(userAuthContext);
}
