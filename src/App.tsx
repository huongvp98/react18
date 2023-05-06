import { RootRoute } from "routers/root";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RootRoute />
    </BrowserRouter>
  );
}

export default App;
