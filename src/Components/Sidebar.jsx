// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-back"></div>
        <nav className="sidebar-nav">
          <ul>
            <li id={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Dashboard</Link>
            </li>
            <li id={location.pathname === "/products" ? "active" : ""}>
              <Link to="/products">Products</Link>
            </li>
            <li id={location.pathname === "/sales" ? "active" : ""}>
              <Link to="/sales">Sales</Link>
            </li>
            <li id={location.pathname === "/reporting" ? "active" : ""}>
              <Link to="/reporting">Reporting</Link>
            </li>
            <li id={location.pathname === "/addon" ? "active" : ""}>
              <Link to="/addon">Add-ons</Link>
            </li>
            <li id={location.pathname === "/setting" ? "active" : ""}>
              <Link to="/setting">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <ul>
          <li id={location.pathname === "/account" ? "active" : ""}>
            <Link to="/account">My Account</Link>
          </li>
          <li id={location.pathname === "/support" ? "active" : ""}>
            <Link to="/support">Support</Link>
          </li>
          <li id={location.pathname === "/logout" ? "active" : ""}>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
