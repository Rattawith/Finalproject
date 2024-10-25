import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [showCourses, setShowCourses] = useState(false);

  const toggleCourses = () => {
    setShowCourses(!showCourses);
  };

  return (
    <>
    <div className='header'>
      <div className='header_bar'>
        <Link to={"/"}>
          <img src="https://cdn-icons-png.flaticon.com/128/396/396040.png" alt="logobrand" />
        </Link>
        <Link to={"/"}><a href="#"><h5>หลักสูตรทั้งหมด</h5></a></Link>
      </div>
      <div className='header_bar_center'>
        <input type="search" />
      </div>
      <div className="header_icon_hide">
        <Link to={"/"}>
          <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="profile" className="profile-icon" />
        </Link>
        <button onClick={toggleCourses} className="menu_icon">
          <img src="https://img.icons8.com/?size=50&id=36389&format=png" alt="menu" className="menu-icon" />
        </button>
      </div>
    </div>

          {/* แสดงรายการหลักสูตรเมื่อกดปุ่มเมนู */}
          {showCourses && (
        <div className="courses-list">
          <Link to="/"><h5>หลักสูตรทั้งหมด</h5></Link>
        </div>
      )}
    </>
  );
}

export default Header;