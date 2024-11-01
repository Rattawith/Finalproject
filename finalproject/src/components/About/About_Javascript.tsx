import { Link } from 'react-router-dom';
import './About.css';

function About_JavaScript() { 
  return (
    <div className='about'>
      <h2>เกี่ยวกับ</h2>
      <p className="about-description">JavaScript เป็นภาษาคอมพิวเตอร์ที่ใช้ในการพัฒนาเว็บร่วมกับ HTML เพื่อให้เว็บมีลักษณะแบบไดนามิก คือ เว็บสามารถตอบสนองกับผู้ใช้งานหรือแสดงเนื้อหาที่แตกต่างกันไปโดยจะอ้างอิงตามเว็บบราวเซอร์ที่ผู้เข้าชมเว็บใช้งานอยู่</p>
      <h2>เนื้อหาภายในคอร์ส</h2>
      <h3>01 HTML - JavaScript </h3>
      <p className="course-duration">1 นาที</p>
      <Link to="/educations_javascript?courseId=01">Click</Link>
    </div>
  );
}

export default About_JavaScript; 
