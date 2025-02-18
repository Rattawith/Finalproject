import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Machine01 from '../components/Pack_Courses/Machine_Learning/Machine01';
import Machine02 from '../components/Pack_Courses/Machine_Learning/Machine02';
import Machine03 from '../components/Pack_Courses/Machine_Learning/Machine03';
import Machine04 from '../components/Pack_Courses/Machine_Learning/Machine04';
import Machine05 from '../components/Pack_Courses/Machine_Learning/Machine05';
import Machine06 from '../components/Pack_Courses/Machine_Learning/Machine06';
import Notfound from './Notfound';

import './Educations.css';

function Educations_Ml() {
  const { courseId } = useParams<{ courseId?: string }>(); // ดึงค่าพารามิเตอร์จาก URL
  const courseIdNumber = courseId ? Number(courseId) : null; // แปลงเป็น number

  const renderCourse = () => {
    switch (courseIdNumber) {
      case 1: return <Machine01 />;
      case 2: return <Machine02 />;
      case 3: return <Machine03 />;
      case 4: return <Machine04 />;
      case 5: return <Machine05 />;
      case 6: return <Machine06 />;
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

export default Educations_Ml;
