import React, { useState } from 'react';
import { Box, Container, Grid, NativeSelect, Typography } from '@mui/material';
import { auth } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { allUsers } from '../App';

export const UserRoles = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const [role, setRole] = useState('');
  console.log('role is', role);

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
          {allUsers.map((user) => (
            <Box key={user.uid} className='userList'>
              <Typography style={{ fontSize: 20 }}>{user.phoneNumber}</Typography>
              <Typography style={{ fontSize: 20 }}>{user.email}</Typography>
              <NativeSelect
                value={user.role}
                onChange={(e) => {
                  const newRole = e.target.value;
                  setRole(newRole);
                  user.role = newRole;
                }}>
                <option value=''>Виберіть роль</option>
                <option value={'пасажир'}>Пасажир</option>
                <option value={'водій'}>Водій</option>
                <option value={'диспетчер'}>Диспетчер</option>
              </NativeSelect>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
