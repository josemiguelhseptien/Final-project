import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.css";

export const Footer = () => {
	const { store, actions } = useContext(Context);

	return (

		<footer className="footer mt-auto py-3 text-center">
			<div>
				{store.loggedUser.id == "" ?
					(<Link to="/">
						<span className="navbar-brand mb-0 h1" onClick={(e) => { (actions.logout()) }}></span>
					</Link>) : (<Link to="/">
						<button type="text" className="btn btn-secondary" onClick={(e) => { (actions.logout()) }}>logout</button>
					</Link>)
				}
			</div>
		</footer>
	);
}