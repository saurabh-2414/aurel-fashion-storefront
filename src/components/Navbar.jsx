import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#" className="logo">
          AUREL
        </a>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#products" onClick={() => setMenuOpen(false)}>
            New Arrivals
          </a>

          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Collections
          </a>

          <a href="#products" onClick={() => setMenuOpen(false)}>
            Clothing
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            Our Story
          </a>
        </div>

        {/* Navbar Actions */}
        <div className="nav-actions">

          <button
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;