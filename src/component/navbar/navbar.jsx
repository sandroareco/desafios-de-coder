import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
     <header className='header'>
      <nav>
        <ul className='nav-items'>
          <Link to='/' className='nav-link'>
          <li>Home</li>
          </Link>

          <Link to='/categoria/remera' className='nav-link'>
          <li>Remera</li>
          </Link>

          <Link to='/categoria/jeans' className='nav-link'>
          <li>Jeans</li>
          </Link>

          <Link to='/categoria/buzo' className='nav-link'>
          <li>Buzo</li>
          </Link>

        </ul>
      </nav>
     </header>
    )
}

export default Navbar;
