import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';


import App from './App';
import ErrorPage from './error-page';

import Landingpage from './dirs/landingpage.jsx';
import About from './dirs/about.jsx';
import Categories from './dirs/categories.jsx';
import Contact from './dirs/contact.jsx';

import {  
    createBrowserRouter,
    RouterProvider,
    Route } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/categories",
        element: <Categories />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode >
        <RouterProvider router={router} />
    </React.StrictMode>
)
