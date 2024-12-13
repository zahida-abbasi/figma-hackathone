import React from 'react';
import dynamic from 'next/dynamic';
import Top from './Top/Top';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const ToggleButton = dynamic(
  () => import('@components/shared/buttons/ToggleButton/ToggleButton'),
  {
    ssr: false,
  }
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='relative'>
      <Top/>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
