import Counter from "features/counter";
import Dasboard from "features/dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AdminPageRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="dasboard" element={<Dasboard />}></Route>
      <Route path="counter" element={<Counter />}></Route>
    </Routes>
  );
};
export default AdminPageRoute;
