import './Home.css';
import Header from '../components/Header';
import Courses from '../components/Courses';


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
