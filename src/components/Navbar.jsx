import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Container, Grid } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import '../styles/normilize.css';
import { LOGIN_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../index';

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const onOffBurgerMenu = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={'secondary'}>
        <Toolbar variant='dense'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuOutlinedIcon onClick={onOffBurgerMenu}/>
          </IconButton>
          <Grid container justifyContent={'flex-end'}>
            {user
              ? <Button onClick={() => auth.signOut()} color="inherit" variant='outlined'>Exit</Button>
              : <NavLink to={LOGIN_ROUTE} style={{ color: 'white' }}>
                <Button color="inherit" variant='outlined'>Login</Button>
              </NavLink>
            }
          </Grid>
        </Toolbar>
      </AppBar>

      {isBurgerMenu && (
        <Container style={{
          width: 160,
          border: '1px solid lightgrey',
          background: 'white',
          position: 'absolute',
          left: 0,
          top: 50,
          height: 90,
          padding: 0
        }}>
          <Link to={'/userRoles'}>
            <Button style={{ width: 160, background: 'lightgrey', color: 'black', marginBottom: 5 }}>
              User Roles
            </Button>
          </Link>

          <Button style={{ width: 160, background: 'lightgrey', color: 'black', marginBottom: 5 }}>
              example button
          </Button>
          <Button style={{ width: 160, background: 'lightgrey', color: 'black', marginBottom: 5 }}>
              example button
          </Button>
          <Button style={{ width: 160, background: 'lightgrey', color: 'black', marginBottom: 5 }}>
              example button
          </Button>
          <Button style={{ width: 160, background: 'lightgrey', color: 'black', marginBottom: 5 }}>
              example button
          </Button>
        </Container>
      )}
    </Box>
  );
};
