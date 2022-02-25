import React from 'react';
import { Outlet } from 'react-router-dom';
import MeCategory from './MeCategory'
import './me.css'
function Me() {
  return (
    <>
      <MeCategory />
      
      <Outlet/>
    </>
  )
}

export default Me;
