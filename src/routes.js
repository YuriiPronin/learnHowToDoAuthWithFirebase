import { Login } from './components/Login';
import { Main } from './components/Main';
import { EmailSingIn } from './components/EmailSingIn';
import { PhoneLogin } from './components/phoneLogin';
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  EMAIL_ROUTE,
  PHONE_ROUTE
} from './utils/consts';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: EMAIL_ROUTE,
    Component: EmailSingIn
  },
  {
    path: PHONE_ROUTE,
    Component: PhoneLogin
  }
];

export const privateRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  }
];
