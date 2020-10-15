import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header = () => {
    return (
     <span className="wrapper">
        <div className="header">
          <Navbar/>
          <HeaderMain/>
      </div>
     </span>
    );
};

export default Header;