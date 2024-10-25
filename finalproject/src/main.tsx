import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'
import WrappedApp from "./pages/WrappedApp";



  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <WrappedApp></WrappedApp>
    </React.StrictMode>
);
