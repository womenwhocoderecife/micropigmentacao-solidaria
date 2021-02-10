import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";

import "./index.css";
import "./assets/style/variables.css";

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);

serviceWorker.unregister();
