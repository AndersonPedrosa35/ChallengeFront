import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
  return (
    <header className="header">
      <section className="header-containerLinks">
        <nav className="header-logo">
          <Link to="/">
            <img src="../../assets/Logo.png" alt="logo" />
          </Link>
        </nav>
        <nav className="header-right">
          <Link to="/myaccount">
            <img src="../../assets/user.png" alt="user" />
          </Link>
        </nav>
      </section>
    </header>
  )
}