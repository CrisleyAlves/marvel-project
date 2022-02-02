import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/" className='Logo'>MARVEL</Link>
    </div>
  )
};

export default Navbar;
