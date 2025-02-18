import { useParams } from 'react-router-dom';
import About_Python from '../components/About/About_Python';
import About_JavaScript from '../components/About/About_Javascript';
import Header from '../components/Header/Header';
import About_Machinelearning from '../components/About/About_Machinelearning';
import About_DataScience_R from '../components/About/About_DataScience_R';

function Introduction() {
  const { id } = useParams<{ id: string }>(); // แปลงค่า id ที่ได้จาก useParams() ซึ่งเป็น string ให้กลายเป็น number 
  const courseId = Number(id); //แปลงเป็น number

  return (
    <div className="container">
      <Header />
      {courseId === 1 ? (
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
