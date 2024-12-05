import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Datascience_R_01 from '../components/Pack_Courses/DataScience_R/Datascience_R_01';


function Educations_DataScience_R() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const courseId = params.get('courseId');

  return (
    <div className='container'>
      <Header />
      {courseId === '01' && <Datascience_R_01 />}
      {/* เพิ่มเงื่อนไขสำหรับ courseId อื่น ๆ ที่นี่ */}
    </div>
  );
}

export default Educations_DataScience_R;
