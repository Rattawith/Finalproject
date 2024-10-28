import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Machine01 from '../components/Machine_Learning/Machine01';
import Machine02 from '../components/Machine_Learning/Machine02';
import Machine03 from '../components/Machine_Learning/Machine03';
import Machine04 from '../components/Machine_Learning/Machine04';
import Machine05 from '../components/Machine_Learning/Machine05';
import Machine06 from '../components/Machine_Learning/Machine06';


function Educations_Ml() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const courseId = params.get('courseId');

  return (
    <div className='container'>
      <Header />
      {courseId === '01' && <Machine01 />}
      {courseId === '02' && <Machine02 />}
      {courseId === '03' && <Machine03 />}
      {courseId === '04' && <Machine04 />}
      {courseId === '05' && <Machine05 />}
      {courseId === '06' && <Machine06 />}
      {/* เพิ่มเงื่อนไขสำหรับ courseId อื่น ๆ ที่นี่ */}
    </div>
  );
}

export default Educations_Ml;
