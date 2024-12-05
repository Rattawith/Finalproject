import { useParams } from 'react-router-dom';
import About_Python from '../components/About/About_Python';
import About_JavaScript from '../components/About/About_Javascript';
import Header from '../components/Header/Header';
import About_Machinelearning from '../components/About/About_Machinelearning';
import About_DataScience_R from '../components/About/About_DataScience_R';

function Introduction() {
  const { id } = useParams<{ id: string }>();
  const courseId = Number(id);

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
