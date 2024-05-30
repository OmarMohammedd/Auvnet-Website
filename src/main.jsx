import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Zoom, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './i18n';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
