<link rel="preconnect" href="https://fonts.googleapis.com"></link>

import React, { useState } from 'react'; // ใช้ useState เพื่อจัดการสถานะของเมนู
import { Link } from 'react-router-dom'; // ใช้สร้างลิงก์ไปยังหน้าคอร์สที่เลือก
import './Header.css';

function Header() {
  const [showCourses, setShowCourses] = useState(false); // showCourses เป็น boolean ที่เก็บสถานะว่าจะแสดงเมนูหลักสูตรหรือไม่ โดยค่าตั้งต้นกำหนกให้เป็น false

  const toggleCourses = () => {
    setShowCourses(!showCourses); // ฟังก์ชันนี้ทำหน้าที่ สลับค่าของ showCourses ถ้ากดปุ่มเมนู (menu_icon), showCourses จะเปลี่ยนจาก false → true และแสดงเมนู
  };

  return (
    <>
    <div className='header'>
      <div className='header_bar'>
        <Link to={"/"}>
          <img src="https://school.borntodev.com/logos/school-full-225x72.png" alt="logobrand" />
        </Link>
      </div>
      <div className='header_bar_center'>
      <Link to={"/"}><h5>หลักสูตรทั้งหมด</h5></Link>
      </div>
      <div className="header_icon_hide">
          {/* <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=FFFFFF" alt="profile" className="profile-icon" /> */}
        <button onClick={toggleCourses} className="menu_icon">
          <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" alt="menu" className="menu-icon" />
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
