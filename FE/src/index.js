import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/common.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Path from "./routerPath/Path.jsx";
import { Flag } from "./flag/Flag.jsx";
import { WebSocketProvider } from "./flag/WebSocketContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Flag>
      <WebSocketProvider>
        <Path />
      </WebSocketProvider>
    </Flag>
  </BrowserRouter>
);
reportWebVitals();
