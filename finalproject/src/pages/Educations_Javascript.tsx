import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Javascript01 from '../components/Pack_Courses/Javascript/Javascript01';
import Notfound from './Notfound';

import './Educations.css';

function Educations_Javascript() {
  const { courseId } = useParams<{ courseId?: string }>(); // ดึงค่าพารามิเตอร์จาก URL
  const courseIdNumber = courseId ? Number(courseId) : null; // แปลงเป็น number

  if (courseIdNumber !== 1) {
    return <Notfound />; // ถ้า courseId ไม่ใช่ 1 ให้ไปหน้า Notfound
  }

  return (
    <div className='container'>
      <Header />
      <div className='container-video'></div>
      <Javascript01 /> {/* แสดงวิดีโอ JavaScript01 ถ้า courseId ถูกต้อง */}
    </div>
  );
}

export default Educations_Javascript;
