import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("app");

// Create a root
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
