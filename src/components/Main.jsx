import React from 'react';
// import { firestore } from '../index';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

export const Main = () => {
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
          style={{ width: 500 }}
          alignItems={'center'}
          direction={'column'}
          textAlign={'center'}
        >
          <Typography style={{ fontSize: 40 }}>Створіть свою поїздаку</Typography>
          <form action="submit" className='mainForm'>
            <Typography>Звідки</Typography>
            <TextField placeholder='Введіть звідки прямуєте'/>
            <Typography>Куди</Typography>
            <TextField placeholder='Введіть куди прямуєте'/>
            <Typography>Кількість пасажирів</Typography>
            <TextField placeholder='Введіть кількість пасажирів'/>
            <Typography>Час виїзду</Typography>
            <TextField placeholder='Введіть орієнтовний час виїзду'/>
            <Button>Підтвердити</Button>
          </form>

        </Grid>
      </Grid>
    </Container>
  );
};
