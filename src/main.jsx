import * as React from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
// import Home from './pages/Home';
// import Profile from './pages/Profile'
// import About from './pages/About';
// import Contact from './pages/Contact'
import Navbar from './components/Navbar';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <RouterProvider router={router} /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)