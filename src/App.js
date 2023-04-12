import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { AppRouter } from './components/AppRouter';
import { useAuthState } from 'react-firebase-hooks/auth';
import { fireApp, db, firestore, auth } from './index';
import { Loader } from './components/Loader';

export const allUsers = [];

function App () {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({});

  const getFilteredCollection = async (collectionName, key, value) => {
    const result = await db
      .collection(collectionName)
      .where(key, '==', value)
      .get();
    const resultData = [];
    result.forEach((doc) => resultData.push({ ...doc.data(), id: doc.id }));
    return resultData;
  };

  const saveDocToCollection = async (collectionName, document) => {
    const result = await db.collection(collectionName).add(document);
    return result;
  };

  useEffect(() => {
    const unsubsrcribe = fireApp.auth().onAuthStateChanged((result) => {
      if (result) {
        getFilteredCollection('users', 'uid', result.uid)
          .then((users) => {
            if (users.length === 0) {
              saveDocToCollection('users', {
                name: result.displayName || '',
                uid: result.uid,
                email: result.email || '',
                phoneNumber: result.phoneNumber || ''
              }).then((doc) => console.log(doc.id));
            } else {
              setCurrentUser(users[0]);
            }
          })
          .catch((err) => console.log(err));
      } else {
        setCurrentUser({});
      }
    });
    return () => {
      unsubsrcribe();
    };
  }, []);

  const usersCollection = firestore.collection('users');

  useEffect(() => {
    usersCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot) {
          querySnapshot.forEach((doc) => {
            const user = doc.data();
            if (!allUsers.some((u) => u.uid === user.uid)) {
              allUsers.push(user);
            }
          });
          console.log(allUsers);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {loading
        ? (<Loader />)
        : (<>
          <Navbar />
          <AppRouter />
        </>
        )}
    </>
  );
}

export default App;
