import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './utilities/footer/Footer';
import ScrollToTopButton from './components/scrolltotop/ScrollToTop';

function Layout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      <Outlet />
      {!isAdminPage && <Footer />}
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
