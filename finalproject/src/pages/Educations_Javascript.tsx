import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Javascript01 from '../components/Pack_Courses/Javascript/Javascript01';

import './Educations.css'


function Educations_Javascript() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const courseId = params.get('courseId');

  return (
    <div className='container'>
      <Header />
      <div className='container-video'></div>
      {courseId === '01' && <Javascript01 />}
      {/* เพิ่มเงื่อนไขสำหรับ courseId อื่น ๆ ที่นี่ */}
    </div>
  );
}

export default Educations_Javascript;
