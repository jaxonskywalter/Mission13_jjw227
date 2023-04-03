import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';

// creates the navbar and outlet to be displayed on the layout page
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
