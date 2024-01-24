import { useState } from 'react'
import Button from '@mui/material/Button';
import {  createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Routes from './routes/indexRoutes';
import '../public/styles/index.css'
import { AuthProvaider } from './context/AuthContext';

function App() {

  return (
    <AuthProvaider >
      <RouterProvider router={Routes}>
      </RouterProvider>
    </AuthProvaider>
    
    
  )
}

export default App
