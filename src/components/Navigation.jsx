import React from "react";
import { Link } from "react-router-dom";
import crown from "../assets/crown.svg";
import "../styles/083 navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <img src={crown} alt="crown" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link
            to="/shop"
            className="nav-link"
            style={{ fontWeight: "bold", color: "#0e5d43" }}
          >
            SHOP
          </Link>
          <Link
            to="/sign-in"
            className="nav-link"
            style={{ fontWeight: "bold", color: "#ff2625" }}
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
