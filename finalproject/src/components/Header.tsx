import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header_bar'>
        <Link to={"/"}>
          <img src="https://cdn-icons-png.flaticon.com/128/396/396040.png" alt="logobrand" />
        </Link>
        <Link to={"/"}><a href="#">หลักสูตรทั้งหมด</a></Link>
      </div>
      <div className="header_icon_hide">
        <Link to={"/"}>
          <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="profile" className="profile-icon" />
        </Link>
        <Link to="#">
          <img src="https://img.icons8.com/?size=50&id=36389&format=png" alt="menu" className="menu-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
