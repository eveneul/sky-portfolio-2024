import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("sky")!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
