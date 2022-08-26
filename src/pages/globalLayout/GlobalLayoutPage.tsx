import React from 'react';
import { Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

export const GlobalLayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
