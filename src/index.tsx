import React from 'react';
import ReactDOM from 'react-dom/client';
import TvShowsList from './pages/TvShowsList';
import TvShows from './pages/TvShowDetails';

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <TvShowsList/>
    ),
  },
  {
    path: "/tvShow/:tvShowId",
    element: (
     <TvShows/>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
 
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
   
  </React.StrictMode>
);

