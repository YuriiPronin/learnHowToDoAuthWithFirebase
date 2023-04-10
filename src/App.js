import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AppRouter } from './components/AppRouter';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './index';
import { Loader } from './components/Loader';
import { EmailSingIn } from './components/EmailSingIn';
import { PhoneLogin } from './components/phoneLogin';

function App () {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <AppRouter />
      <Routes>
        <Route path='/emailLogin' element={<EmailSingIn />}/>
        <Route path='/phoneLogin' element={<PhoneLogin/>}/>
      </Routes>
    </>
  );
}

export default App;
