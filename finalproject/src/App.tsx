import Home from './pages/Home';
import Course from './pages/Course';
import Learning from './pages/Learning';
import Profile from './pages/Profile';
import Notfound from "./pages/Notfound";

import { Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/learning/:id" element={<Learning />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
  
  );
};

export default App;
