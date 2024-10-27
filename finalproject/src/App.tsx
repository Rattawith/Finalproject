import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Notfound from "./pages/Notfound";
import Testapi from './components/Testapi';
import Educations from './pages/Educations'
import About from './components/About/About';
import Introduction from './pages/Introduction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/educations" element={<Educations />} />
      <Route path="/test/:id" element={<Introduction />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
