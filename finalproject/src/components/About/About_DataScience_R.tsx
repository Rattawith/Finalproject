import { Link } from 'react-router-dom';
import './About.css';

function About_DataScience_R() { 
  return (
    <div className='about'>
      <h2>เกี่ยวกับ</h2>
      <p className="about-description">R คือ Statistical Programming language พัฒนาต่อยอดมาจากภาษา S โดยนักสถิติชื่อ Ross Ihaka และ Robert Gentleman ที่ประเทศนิวซีแลนด์ในช่วงปี 1990s โดยเป้าหมายแรกของทั้งสองคนคือการสร้างโปรแกรม หรือเครื่องมือสำหรับสอนวิชาสถิติให้กับนักศึกษา และถูกใช้อย่างแพร่หลายในกลุ่มนักสถิติ Data Miners และนักวิชาการทั่วโลก</p>
      <h2>เนื้อหาภายในคอร์ส</h2>
      <h3>01 Introduction to Data Science with R </h3>
      <p className="course-duration">51 นาที</p>
      <Link to="/educations/datascience-r/01">Click</Link>
    </div>
  );
}

export default About_DataScience_R; 
