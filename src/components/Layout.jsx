import * as React from 'react';
import Nav from './Nav';
import {Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Layout() {
  const {loading,isAuthenticate}=useAuth()
  console.log(loading);
  console.log(isAuthenticate);
  // console.log(useAuth());
  if (loading ) return <h1 style={{color:'white', fontSize:'40px'}}>loading...</h1>

  
  if (!loading && !isAuthenticate) return <Navigate to="/SingIn" replace/>

  return(
    <main style={{backgroundColor:'black',padding:'0px'}}>
      <Nav></Nav>
      <Outlet/>
    </main>
  )
}
export default Layout