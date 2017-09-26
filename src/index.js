import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducers/counter";
import App from "./App";
import "./index.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const store = createStore(counter);

ReactDOM.render(
  <MuiThemeProvider>
    <App store={store} />
  </MuiThemeProvider>,
  document.getElementById("root")
);
