import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import App from './pages/app/App';
import Countries from './pages/countries/Countries';
import Users from './pages/users/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/countries',
    element: <Countries />,
  },
  {
    path: '/users',
    element: <Users />,
  },
]);
