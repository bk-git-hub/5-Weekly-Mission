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
import FolderPage from './pages/FolderPage/FolderPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import App from './App';

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
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
