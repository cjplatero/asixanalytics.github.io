import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      
        <div className='navbar-container'>
       
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src='images/A6.png' width={65} height={50} style={{marginTop:-5}} />
        
          
      
           {/*  <i src='images/alogo.png' className='fab fa-typo3' /> */}
          </Link>
          
          
          <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} style={{color:"#FFF"}}/>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
                {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>Data Management</li>
                    <li className='nav-item'>Data Governance</li>
                    <li className='nav-item'>Data Analytics</li>
                    <li className='nav-item'>Cloud Storage</li>
                    <li className='nav-item'>CRM</li>
                </ul> */}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;