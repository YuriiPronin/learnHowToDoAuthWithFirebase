import React, { useContext, useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Alert from '@mui/material/Alert';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../index';
import { userAuthContext } from '../Context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

export const PhoneLogin = () => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState('');
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  function useUserAuth () {
    return useContext(userAuthContext);
  }

  function setUpRecaptcha (number) {
    const rercaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {},
      auth
    );
    rercaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, rercaptchaVerifier);
  }

  const getOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (number === '' || number === undefined) {
      return setError('Please enter a valid phone number');
    }
    try {
      const responce = await setUpRecaptcha(number);
      console.log(responce);
      setConfirmObj(responce);
      setFlag(true);
    } catch (error) {
      setError(error.message);
    }
    console.log(number);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === '' || otp === null) { return; };
    try {
      setError('');
      await confirmObj.confirm(otp);
      navigate('/main');
    } catch (err) {
      setError(error.message);
    }
  };

  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          container
          style={{ width: 400 }}
          alignItems={'center'}
          direction={'column'}
          textAlign={'center'}
        >
          <form onSubmit={getOtp} style={{ display: !flag ? 'block' : 'none' }}>
            <PhoneInput
              defaultCountry='UA'
              value={number}
              onChange={setNumber}
              placeholder='Enter Phone Number'
            />
            <div id='recaptcha-container'/>
            <div className='button-right'>
              <Button variant='primary' type='submit'>Send Code</Button>
            </div>
          </form>

          <form onSubmit={verifyOtp} style={{ display: flag ? 'block' : 'none' }}>
            <TextField
              type='text'
              placeholder='Enter code'
              onChange={(e) => setOtp(e.target.value)}
            />
            <div className='button-right'>
              <Button variant='primary' type='submit'>Verify Code</Button>
            </div>
          </form>

        </Grid>
      </Grid>
    </Container>
  );
};
