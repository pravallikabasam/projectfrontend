import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles.css";
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ffffff", background: "#2ecc72" };
  } else {
    return {
      color: "#ffffff",
    };
  }
};
const Navbar = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark ">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/dashboard")}
          className="nav-link"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          Admin Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signup")}
          className="nav-link"
          to="/signup"
        >
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signin")}
          className="nav-link"
          to="/signin"
        >
          Sign In
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signout")}
          className="nav-link"
          to="/signout"
        >
          Sign Out
        </Link>
      </li>
    </ul>
  </div>
);
export default withRouter(Navbar);
