import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import user from "../src/data/user"
ReactDOM.render(<App user={user}/>, document.getElementById("root"));
