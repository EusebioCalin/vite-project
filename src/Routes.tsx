import {
  createBrowserRouter
} from 'react-router-dom';
import Fallback from './components/Fallback/Fallback';
import HomePage from './components/HomePage/HomePage';
import ModelCanvas from './components/ModelCanvas/ModelCanvas';

export const router = createBrowserRouter([

  {
    path: '/model',
    element: <ModelCanvas />
  },
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Fallback />
  }
]);
