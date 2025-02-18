import { useParams } from 'react-router-dom';

import Header from '../components/Header/Header';
import Python01 from '../components/Pack_Courses/Python/Python01';
import Python02 from '../components/Pack_Courses/Python/Python02';
import Python03 from '../components/Pack_Courses/Python/Python03';
import Python04 from '../components/Pack_Courses/Python/Python04';
import Python05 from '../components/Pack_Courses/Python/Python05';
import Python06 from '../components/Pack_Courses/Python/Python06';
import Python07 from '../components/Pack_Courses/Python/Python07';
import Python08 from '../components/Pack_Courses/Python/Python08';
import Python09 from '../components/Pack_Courses/Python/Python09';
import Notfound from './Notfound';

import './Educations.css';

function Educations_Python() {
  const { courseId } = useParams<{ courseId?: string }>(); // ดึงค่าพารามิเตอร์จาก URL
  const courseIdNumber = courseId ? Number(courseId) : null; // แปลงเป็น number

  const renderCourse = () => {
    switch (courseIdNumber) {
      case 1: return <Python01 />;
      case 2: return <Python02 />;
      case 3: return <Python03 />;
      case 4: return <Python04 />;
      case 5: return <Python05 />;
      case 6: return <Python06 />;
      case 7: return <Python07 />;
      case 8: return <Python08 />;
      case 9: return <Python09 />;
      default: return <Notfound />; // ถ้า courseId ไม่ถูกต้อง ไปหน้า Notfound
    }
  };

  return (
    <div className='container'>
      <Header />
      {renderCourse()} {/* แสดงคอร์สที่ตรงกับ courseId */}
    </div>
  );
}

export default Educations_Python;
