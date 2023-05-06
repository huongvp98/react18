import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SiderBar from "./SiderBar";
import "./style.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <div className="layout">
        <SiderBar />
        <section className="layout-header-content">
          <Header />
          <div className="layout-content">
            {props.children}
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
