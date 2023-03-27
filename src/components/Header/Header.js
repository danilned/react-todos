import React from "react";
import { NavLink, Link } from "react-router-dom";
import Theme from "./Theme";

function Header() {
  return (
    <div className="header">
      <div className="pages">
        <NavLink to="/home">Todos</NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/">Logout</Link>
      </div>
      <Theme />
    </div>
  );
}

export default Header;
