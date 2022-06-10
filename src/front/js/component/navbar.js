import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import logo from "/workspace/Final-project/src/front/img/logo-made.png"

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let loggedUserId = store.loggedUser.id

  return (
    <nav className="navbar navbarb ">
      <div className="container">
        <Link to="/">
          <img className="cropped" src={logo} alt="Italian Trulli" />
        </Link>
        {loggedUserId == "" ? (
          <div className="ml-auto">
            <Link to="/login">
              <button className="nav-btn btn button2 mx-2">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="nav-btn btn button2 mx-2">Sign Up</button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            {store.loggedUser.userType == "professional" ? (<Link to="/dashboard"><button className="nav-btn btn button2 mx-2">Pro Dashboard</button></Link>) : (<Link to="/client_dashboard"><button className="nav-btn btn button2 mx-2">Client Dashboard</button></Link>)}
            <Link to="/marketplace">
              <button className="nav-btn button2 btn mx-2">Marketplace</button>
            </Link>
            <Link to={{ pathname: `/account/${loggedUserId}` }}>
              <button className="nav-btn btn button2 ">Account</button>
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
