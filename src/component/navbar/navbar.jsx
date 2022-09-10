import './Navbar.css'
import { Link } from 'react-router-dom';

 export const Navbar = () => {
    return (
     <header className='header'>
      <nav>
        <ul className='nav-items'>
          <Link to='/'>
          <li>Home</li>
          </Link>

          <Link to='/categoria/remera'>
          <li>Remera</li>
          </Link>

          <Link to='/categoria/jeans'>
          <li>Jeans</li>
          </Link>

          <Link to='/categoria/buzo'>
          <li>Buzo</li>
          </Link>

        </ul>
      </nav>
     </header>
    )
}
