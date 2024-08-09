import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
//import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   
      <Provider store={store}>
        <App />
        <Toaster/>
      </Provider>
    
  </BrowserRouter>
);
