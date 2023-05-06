import AdminPage from "features/index";
import Home from "pages/home";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const RootRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPage />}></Route>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  );
};
