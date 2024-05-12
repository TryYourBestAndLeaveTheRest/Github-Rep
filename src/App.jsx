import { useState, useEffect } from 'react';

import Repos from './pages/repository';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./pages/Contact"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './pages/About';




function App() {
  const router = createBrowserRouter([

    {
      path: "/repo",
      element: <Repos />,
    },
    {
      path: '/Dashboard',
      element: <Home />
    }, {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/About',
      element: <About />
    }
  ])


  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />

    </>
  )
}

export default App
