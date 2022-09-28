import React from "react";
import { Link } from "react-router-dom";


function Nav () {
    return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/new">Create your own!</Link>
    </nav>
    )

}

export default Nav;
