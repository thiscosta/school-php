
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import AppRouter from "@config/router";
import { store } from "@config/store";
import reportWebVitals from "./reportWebVitals";
import Notifications from 'react-notify-toast';

ReactDOM.render(
  <React.StrictMode> 
    <Notifications options={{zIndex: 200, top: '50px'}} />
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
