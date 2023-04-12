import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

export const Main = (props) => {
  const [from, setFrom] = useState('');
  const [where, setWhere] = useState('');
  const [passengers, setPassengers] = useState('');
  const [time, setTime] = useState('');
  const [tripsList, setTripsList] = useState([]);
  const [showTripList, setShowTripList] = useState(false);
  console.log('my trips', tripsList);

  const setTrip = () => {
    const currentTrip = {
      from,
      where,
      passengers,
      time
    };
    const updatedList = [...tripsList, currentTrip];
    setTripsList(updatedList);
    setFrom('');
    setWhere('');
    setPassengers('');
    setTime('');

    return tripsList;
  };

  const onOffTripList = () => {
    setShowTripList(!showTripList);
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
          style={{ width: 500 }}
          alignItems={'center'}
          direction={'column'}
          textAlign={'center'}
        >
          <Typography style={{ fontSize: 40 }}>Створіть свою поїздку</Typography>
          <form action="submit" className='mainForm'>
            <Typography>Звідки</Typography>
            <TextField
              placeholder='Введіть звідки прямуєте'
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            />
            <Typography>Куди</Typography>
            <TextField
              placeholder='Введіть куди прямуєте'
              value={where}
              onChange={(e) => {
                setWhere(e.target.value);
              }}
            />
            <Typography>Кількість пасажирів</Typography>
            <TextField
              placeholder='Введіть кількість пасажирів'
              value={passengers}
              onChange={(e) => {
                setPassengers(e.target.value);
              }}
            />
            <Typography>Час виїзду</Typography>
            <TextField
              placeholder='Введіть орієнтовний час виїзду'
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            <Button onClick={setTrip}>Підтвердити</Button>
            <Button onClick={onOffTripList}>Історія поїздок</Button>

            {showTripList && (
              <Grid style={{ background: 'rgb(242, 242, 189)' }}>
                {tripsList.map((trip, index) => (
                  <li key={index}>
                    <p>From: {trip.from}</p>
                    <p>Where: {trip.where}</p>
                    <p>Passengers: {trip.passengers}</p>
                    <p>Time: {trip.time}</p>
                  </li>
                ))}
              </Grid>
            )}
          </form>

        </Grid>
      </Grid>
    </Container>
  );
};
