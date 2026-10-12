import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import DashboardHome from "./components/DashboardHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardHome />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);
