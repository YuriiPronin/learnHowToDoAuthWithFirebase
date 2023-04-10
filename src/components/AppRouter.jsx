import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { MAIN_ROUTE, LOGIN_ROUTE, EMAIL_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../index';

export const AppRouter = () => {
  const [user] = useAuthState(auth);

  console.log('user is', user);
  return user
    ? (
      <>
        <Routes>
          {privateRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} end={true} />
          )}
          <Route path="/*" element={<Navigate to={MAIN_ROUTE} replace={true} />} />
        </Routes>

      </>
    )
    : (
      <>
        <Routes>
          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} end={true} />
          )}
          <Route path="/*" element={<Navigate to={LOGIN_ROUTE} replace={true} />} />
          <Route path='/*' element={<Navigate to={EMAIL_ROUTE} replace={true}/>}/>
        </Routes>
      </>
    );
};
