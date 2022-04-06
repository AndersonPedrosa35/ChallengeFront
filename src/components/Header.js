import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/context';
import '../css/Header.css';
import '../css/NotButtons.css';

export default function Header() {
  const { isOpen, setIsOpen } = useContext(Context);

  function detectMobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      setIsOpen(false);
      return '';
    }
    else {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    detectMobile();
  }, []);

  return (
    <header className="header">
      <section className="header-containerLinks">
        <nav className="header-logo">
          <button
            type='button'
            className='notButton'
            onClick={ () => setIsOpen(!isOpen) }
          >
            <img src={ require('../assets/icons/menuHamburguer.svg') } alt="menu" />
          </button>
          <Link to="/">
            <img
              src={require('../assets/Logo.png')}
              alt="logo"
              width={ '150px' }
            />
          </Link>
        </nav>
        <nav className="header-right">
          <Link
            to="/myaccount"
            className='myAccount'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
              alt="user"
              width={ '40px' }
            />
          </Link>
        </nav>
      </section>
    </header>
  )
}