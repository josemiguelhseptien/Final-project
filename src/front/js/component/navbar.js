import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbarb ">
      <div className="container">
        <Link to="/">
          <img className="cropped" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="Italian Trulli" />
        </Link>
        {store.user ? (
          <div className="ml-auto">
            <Link to="/dashboard">
              <button className="btn btn-primary mx-2">Dashboard</button>
            </Link>
            <Link to="/marketplace">
              <button className="btn btn-primary mx-2">Marketplace</button>
            </Link>
            <Link to="/account">
              <button className="btn btn-primary mx-2">Account</button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            <Link to="/demo">
              <button className="btn btn-primary mx-2">Log In</button>
            </Link>
            <Link to="/demo">
              <button className="btn btn-primary mx-2">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  match: PropTypes.object,
};
