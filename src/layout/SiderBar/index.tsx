import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IMenuItem } from "type/layout";
import "./style.css";

const menu: Array<IMenuItem> = [
  {
    url: "/admin/dasboard",
    title: "Dashboard",
    key: "dasboard",
  },
  {
    url: "/admin/counter",
    title: "Counter",
    key: "counter",
  },
];

function SiderBar() {
  const hef = useLocation();
  return (
    <aside className="layout-sider">
      <div className="layout-sider-children">
        <div className="logo">Logo</div>
        <ul className="sider-bar-navigate">
          {menu.map((el) => (
            <li
              key={el.key}
              className={`sider-bar-children ${
                hef.pathname === el.url ? "selected-sider-item" : ""
              }`}
            >
              <div>
                <Link to={el.url}>{el.title}</Link>
              </div>
            </li>
          ))}
        </ul>
        <div aria-hidden="true" style={{ display: "none" }}></div>
      </div>
    </aside>
  );
}

export default SiderBar;
