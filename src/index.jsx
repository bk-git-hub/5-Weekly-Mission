import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import './assets/css/reset.css';
import SharedPage from './pages/SharedPage/SharedPage';
import App from './pages/FolderPage/FolderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/folder' replace />,
  },
  {
    path: '/folder',
    element: <App />,
  },
  {
    path: '/shared',
    element: <SharedPage />,
  },
  {
    path: '*',
    element: <SharedPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
