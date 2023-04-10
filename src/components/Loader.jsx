import { Container, Grid } from '@mui/material';
import React from 'react';
import '../App.css';

export const Loader = () => {
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
          alignItems={'center'}
          direction={'column'}
        >
          <div className="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  );
};
