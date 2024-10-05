import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <div className='header'>
    <div className='header__bar'>
        <Link to={"/"}><a href="#"><img src="https://img.icons8.com/?size=80&id=ledoOw5M8qvM&format=png" alt="logobrand" /></a></Link>
        <Link to={"/"}><a href="#">Home</a></Link>
        <Link to={"/products"}><a href="#">Products</a></Link>
    </div>
    <div className="header__icon">
            <a href="#"><img src="https://img.icons8.com/?size=50&id=36389&format=png" alt="menu" />
            </a>
        </div>
    </div>
  )
}

export default Header;