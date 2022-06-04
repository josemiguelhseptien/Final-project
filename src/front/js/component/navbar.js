import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import logo from "/workspace/Final-project/src/front/img/logo-made.png"

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbarb ">
      <div className="container">
        <Link to="/">
          <img className="cropped" src={logo} alt="Italian Trulli" />
        </Link>
        {store.loggedUser.id != "" ? (
          <div className="ml-auto">
            <Link to="/dashboard">
              <button className="btn btn-info mx-2">Dashboard</button>
            </Link>
            <Link to="/marketplace">
              <button className="btn btn-info mx-2">Marketplace</button>
            </Link>
            <Link to={{ pathname: `/account/${store.loggedUser.id}` }}>
              <button className="btn btn-info mx-2">Account</button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            <Link to="/login">
              <button className="btn btn-primary mx-2">Log In</button>
            </Link>
            <Link to="/signup">
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
