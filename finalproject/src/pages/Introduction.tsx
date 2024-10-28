import { useParams } from 'react-router-dom';
import About_Python from '../components/About/About_python';
import About_JavaScript from '../components/About/About_javascript';
import Header from '../components/Header/Header';
import About_Machinelearning from '../components/About/About_machinelearning';
import About_DataScience_R from '../components/About/About_DataScience_R';

function Introduction() {
  const { id } = useParams<{ id: string }>(); // ใช้ string แทน number
  const courseId = Number(id); // แปลง id เป็นหมายเลข

  return (
    <div className='container'>
      <Header />
      {courseId === 1 ? ( // เปลี่ยนเงื่อนไขให้ใช้หมายเลข
        <About_Python />
      ) : courseId === 2 ? (
        <About_JavaScript />
      ) : courseId === 3 ? (
        <About_Machinelearning />
      ) : courseId === 4 ? (
        <About_DataScience_R />
      ) : (
        <p>ไม่พบข้อมูลของคอร์สที่ต้องการ</p>
      )}
    </div>
  );
}

export default Introduction;
