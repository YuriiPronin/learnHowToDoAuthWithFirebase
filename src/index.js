import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase';
// import 'firebase/firestore';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, FacebookAuthProvider } from 'firebase/auth';
import { BrowserRouter } from 'react-router-dom';

// Initialize Firebase
const fireApp = firebase.initializeApp({
  apiKey: 'AIzaSyA8OKkuCTncRiSOc7F9eGVLXAIv1szWhzk',
  authDomain: 'nonameauthotization.firebaseapp.com',
  projectId: 'nonameauthotization',
  storageBucket: 'nonameauthotization.appspot.com',
  messagingSenderId: '495212883708',
  appId: '1:495212883708:web:e6c524b2a1b85deb46f179',
  measurementId: 'G-T7YD8ETZ3R'
});

export const Context = createContext(null);

export const auth = getAuth(fireApp);
export const firestore = firebase.firestore();
export const provider = new FacebookAuthProvider();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
