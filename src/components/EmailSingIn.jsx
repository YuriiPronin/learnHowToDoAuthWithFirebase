import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Grid, Typography } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../index';

export const EmailSingIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef?.current?.value,
      passwordRef?.current?.value
    ).then(user => {
      return user;
    }).catch(err => {
      console.log(err);
    });
  };

  const signIn = e => {
    console.log(emailRef.current.value);
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef?.current?.value,
      passwordRef?.current?.value
    ).then(user => {
      return user;
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <Container>
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
          <form className='form'>
            <Typography style={{ fontSize: 25 }}>Sign In</Typography>
            <TextField autoComplete='username' inputRef={emailRef} label="email" type="email" />
            <TextField autoComplete='current-password' inputRef={passwordRef} label="password" type="password" />
            <Button onClick={signIn} variant="contained" color="primary" type="submit">
              Вхід
            </Button>
            <h6>Not yet register?</h6>
            <Button
              onClick={signUp}
              className='signUpLink'
              variant="contained"
              color="primary"
              type="submit"
            >Зареєструватися</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
