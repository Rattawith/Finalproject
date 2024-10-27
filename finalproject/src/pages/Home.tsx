import './Home.css';
import Header from '../components/Header/Header';
import Courses from '../components/Courses/Courses';


function Home() {
  return (
    <>
    <div className='container'>
      <Header />
      <Courses />
    </div>
    </>
  );
}

export default Home;
