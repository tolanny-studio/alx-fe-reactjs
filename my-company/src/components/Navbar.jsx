import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#1e293b",
        padding: "1rem 2rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              fontWeight: "600",
            }}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              fontWeight: "600",
            }}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#f8fafc",
              fontWeight: "600",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
