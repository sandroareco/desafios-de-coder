import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';

 export const Navbar = () => {
    return(
      <header className='header'>
        <nav>
          <ul className='nav-items'>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/'>
            <li>Silla</li>
            </Link>
            <Link to='/'>
            <li>Electronica</li>
            </Link>
          </ul>
        </nav>
      </header> 
    );
}

