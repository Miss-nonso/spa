import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/search" className="nav-link">
        Search
      </Link>
      <Link to="/playlist" className="nav-link">
        Playlist
      </Link>
    </nav>
  );
};

export default Navbar;
