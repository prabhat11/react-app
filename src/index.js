import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import postStore from "./component/store/Poststore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={postStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
