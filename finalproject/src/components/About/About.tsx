<link rel="preconnect" href="https://fonts.googleapis.com"></link>

import { Link } from 'react-router-dom';
import './About.css'


function About() {
  return (
    <>
    <div className='about'>
    <h2>เกี่ยวกับ</h2>
    <p>Python เป็นภาษาการเขียนโปรแกรมที่ใช้อย่างแพร่หลายในเว็บแอปพลิเคชัน การพัฒนาซอฟต์แวร์ วิทยาศาสตร์ข้อมูล และแมชชีนเลิร์นนิง (ML) นักพัฒนาใช้ Python เนื่องจากมีประสิทธิภาพ เรียนรู้ง่าย และสามารถทำงานบนแพลตฟอร์มต่างๆ ได้มากมาย ทั้งนี้ซอฟต์แวร์ Python สามารถดาวน์โหลดได้ฟรี ผสานการทำงานร่วมกับระบบทุกประเภท และเพิ่มความเร็วในการพัฒนา</p>
    <h2>เนื้อหาภายในคอร์ส</h2>
    <h3>01 Python - Introduction</h3>
    <p>2 นาที</p>
    <Link to="/educations?courseId=01">Click</Link>
    <h3>02 Python - Get Started</h3>
    <p>2 นาที</p>
    <Link to="/educations?courseId=02">Click</Link>
    <h3>03 Python - Syntax</h3>
    <p>2 นาที</p>
    <Link to="/educations?courseId=03">Click</Link>
    <h3>04 Python - Comments</h3>
    <p>1 นาที</p>
    <Link to="/educations?courseId=04">Click</Link>
    <h3>05 Python - Variables</h3>
    <p>2 นาที</p>
    <Link to="/educations?courseId=05">Click</Link>
    <h3>06 Python - Variable Names</h3>
    <p>2 นาที</p>
    <Link to="/educations?courseId=06">Click</Link>
    <h3>07 Python - Assign Multiple Values to Variables</h3>
    <p>1 นาที</p>
    <Link to="/educations?courseId=07">Click</Link>
    <h3>08 Python - Output Variables with print()</h3>
    <p>1 นาที</p>
    <Link to="/educations?courseId=08">Click</Link>
    <h3>09 Python - Global Variables</h3>
    <p>2 นาที</p>
    <Link to="/educations?courseId=09">Click</Link>
    </div>
    </>
  )
}

export default About