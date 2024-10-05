import Checkout from "./pages/Checkout"
import Main from "./pages/Main"
import Notfound from "./pages/Notfound";
import Products from "./pages/Products"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/payment" element={<Checkout></Checkout>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App
