import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Notfound from "./pages/Notfound";
import Introduction from './pages/Introduction';
import Educations_Python from "./pages/Educations_Python";
import Educations_Javascript from "./pages/Educations_javascript";
import Educations_Ml from "./pages/Educations_ml";
import Educations_DataScience_R from "./pages/Educations_DataScience_R";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/educations_python" element={<Educations_Python />} />
      <Route path="/educations_javascript" element={<Educations_Javascript />} /> 
      <Route path="/educations_datascience_r" element={<Educations_DataScience_R />} /> 
      <Route path="/educations_ml" element={<Educations_Ml />} /> 
      <Route path="/introductions/:id" element={<Introduction />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
