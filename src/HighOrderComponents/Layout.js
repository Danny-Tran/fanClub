import React from 'react';
import Header from '../Component/HeaderFooter/Header'
import Footer from '../Component/HeaderFooter/Footer'

const Layout = (props) => {
  return (
    <div>
      <Header/>
      { props.children }
      
      <Footer/>
    </div>
  );
};

export default Layout;