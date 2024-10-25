import Home from './pages/Home';
import Learning from './pages/Learning';
import Profile from './pages/Profile';
import Notfound from "./pages/Notfound";

import { Routes, Route } from "react-router-dom";
import Testapi from './components/Testapi';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/course/:id" element={< />} /> */}
        <Route path="/learning/:id" element={<Learning />} />
        <Route path="/api" element={<Testapi />} />
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
  
  );
};

export default App;
