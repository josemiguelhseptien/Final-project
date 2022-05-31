import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let loggedUserId = store.loggedUser.id

  return (
    <nav className="navbar navbarb ">
      <div className="container">
        <Link to="/">
          <img className="cropped" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="Italian Trulli" />
        </Link>
        {loggedUserId == "" ? (
          <div className="ml-auto">
            <Link to="/login">
              <button className="btn btn-primary mx-2">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-primary mx-2">Sign Up</button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            (<Link to="/dashboard"><button className="btn btn-primary mx-2">Pro Dashboard</button></Link>)
            (<Link to="/client_dashboard"><button className="btn btn-primary mx-2">Client Dashboard</button></Link>)
            {/*store.loggedUser.userType == "professional" ? (<Link to="/dashboard"><button className="btn btn-primary mx-2">Pro Dashboard</button></Link>) : (<Link to="/client_dashboard"><button className="btn btn-primary mx-2">Client Dashboard</button></Link>)*/}
            <Link to="/marketplace">
              <button className="btn btn-primary mx-2">Marketplace</button>
            </Link>
            <Link to={{ pathname: `/account/${loggedUserId}` }}>
              <button className="btn btn-primary mx-2">Account</button>
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
