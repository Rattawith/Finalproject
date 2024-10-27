import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Python01 from '../components/Python/Python01';
import Python02 from '../components/Python/Python02';
import Python03 from '../components/Python/Python03';
import Python04 from '../components/Python/Python04';
import Python05 from '../components/Python/Python05';
import Python06 from '../components/Python/Python06';
import Python07 from '../components/Python/Python07';
import Python08 from '../components/Python/Python08';
import Python09 from '../components/Python/Python09';

function Educations() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const courseId = params.get('courseId');

  return (
    <div className='container'>
      <Header />
      {courseId === '01' && <Python01 />}
      {courseId === '02' && <Python02 />}
      {courseId === '03' && <Python03 />}
      {courseId === '04' && <Python04 />}
      {courseId === '05' && <Python05 />}
      {courseId === '06' && <Python06 />}
      {courseId === '07' && <Python07 />}
      {courseId === '08' && <Python08 />}
      {courseId === '09' && <Python09 />}
      {/* เพิ่มเงื่อนไขสำหรับ courseId อื่น ๆ ที่นี่ */}
    </div>
  );
}

export default Educations;
