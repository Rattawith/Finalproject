import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Datascience_R_01 from '../components/Pack_Courses/DataScience_R/Datascience_R_01';
import Notfound from './Notfound'; 

import './Educations.css';

function Educations_DataScience_R() {
  const { courseId } = useParams<{ courseId?: string }>(); // อนุญาตให้ courseId เป็น undefined
  const courseIdNumber = courseId ? Number(courseId) : null; // แปลงเป็น number

  if (courseIdNumber !== 1) {
    return <Notfound />; // ถ้า courseId ไม่ใช่ 1 ให้ไปหน้า Notfound
  }

  return (
    <div className='container'>
      <Header />
      <Datascience_R_01 /> {/* ถ้า courseId === 1 ให้แสดงคอร์ส */}
    </div>
  );
}

export default Educations_DataScience_R;
