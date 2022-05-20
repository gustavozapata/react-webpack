require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const appElement = document.getElementById("app");

const root = ReactDOMClient.createRoot(appElement);
root.render(<App />);
