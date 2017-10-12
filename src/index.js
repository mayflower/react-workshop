import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import counter from "./reducers/counter";
import App from "./App";
import "./index.css";

const store = createStore(counter);

ReactDOM.render(
  <MuiThemeProvider>
    <App store={store} />
  </MuiThemeProvider>,
  document.getElementById("root")
);
