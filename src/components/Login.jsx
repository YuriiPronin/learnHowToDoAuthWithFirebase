import { Button, Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../index';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Login = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  const loginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      console.log(provider);
      const user = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.log(error);
    };
  };

  const facebookLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    }).catch((error) => {
      console.log(error);
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
          style={{ width: 400, background: 'lightgray' }}
          alignItems={'center'}
          direction={'column'}
          textAlign={'center'}
        >
          <Box p={5}>
            <Link to={'/emailLogin'}>
              <Button
                variant='outlined'
                style={{ color: 'black', marginBottom: 10, borderBlockColor: 'black', width: 220, background: 'lightblue' }}
              >
                <EmailIcon className='icon' /> Login with Email
              </Button>
            </Link>

            <Link to={'/phoneLogin'}>
              <Button
                variant='outlined'
                style={{ color: 'black', marginBottom: 10, borderBlockColor: 'black', width: 220, background: 'green' }}
              >
                <PhoneIcon className='icon'/>Login with Phone
              </Button>
            </Link>
            <Button
              onClick={loginGoogle}
              variant='outlined'
              style={{ color: 'black', marginBottom: 10, borderBlockColor: 'black', width: 220, background: 'white' }}
            >
              <GoogleIcon className='icon'/> Login with Google
            </Button>
            <Button
              onClick={facebookLogin}
              variant='outlined'
              style={{ color: 'black', marginBottom: 10, borderBlockColor: 'black', width: 220, background: 'blue' }}
            >
              <FacebookIcon className='icon'/> Login with Facebook
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
