import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import App from './pages/app/App';

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
    element: <h1>countries</h1>,
  },
  {
    path: '/users',
    element: <h1>users</h1>,
  },
]);
