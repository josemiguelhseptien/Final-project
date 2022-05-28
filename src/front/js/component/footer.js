import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Footer = () => {
	const { store, actions } = useContext(Context);

	return (

		<footer className="footer mt-auto py-3 text-center">
			<div>
				<Link to="/">
					<span className="navbar-brand mb-0 h1" onClick={(e) => { (actions.logout()) }}>PayMeApp</span>
				</Link>
			</div>
		</footer>
	);
}