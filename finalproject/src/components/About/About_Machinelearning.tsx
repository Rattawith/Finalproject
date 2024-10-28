<link rel="preconnect" href="https://fonts.googleapis.com"></link>

import { Link } from 'react-router-dom';
import './About.css'


function About_machinelearning() {
  return (
    <>
    <div className='about'>
    <h2>เกี่ยวกับ</h2>
    <p>Machine Learning คือ “การทำให้ระบบคอมพิวเตอร์สามารถเรียนรู้ได้ด้วยตนเองโดยใช้ข้อมูล” Machine Learning เป็น subset ของ AI จุดประสงค์คือเพื่อใช้ในการสร้างแอปพลิเคชั่นที่มีประสิทธิภาพมากกว่ามนุษย์ในการทำงานบางประเภท โดยการทำให้ฉลาดขึ้น สามารถพัฒนา และเรียนรู้ได้ด้วยตนเอง</p>
    <h2>เนื้อหาภายในคอร์ส</h2>
    <h3>01 ML - Mean, Median and Mode</h3>
    <p>10 นาที</p>
    <Link to="/educations_ml?courseId=01">Click</Link>
    <h3>02 ML - Standard Deviation and Variance</h3>
    <p>7 นาที</p>
    <Link to="/educations_ml?courseId=02">Click</Link>
    <h3>03 ML - Data Distributions and Histograms</h3>
    <p>8 นาที</p>
    <Link to="/educations_ml?courseId=03">Click</Link>
    <h3>04 ML - Scatter Plot</h3>
    <p>5 นาที</p>
    <Link to="/educations_ml?courseId=04">Click</Link>
    <h3>05 ML - Linear Regression</h3>
    <p>10 นาที</p>
    <Link to="/educations_ml?courseId=05">Click</Link>
    <h3>06 ML - Polynomial Regression</h3>
    <p>9 นาที</p>
    <Link to="/educations_ml?courseId=06">Click</Link>
    </div>
    </>
  )
}

export default About_machinelearning;