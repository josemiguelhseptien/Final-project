import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const LandingPage = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="container-fluid">LandingPage</div>
    );
};

LandingPage.propTypes = {
    match: PropTypes.object
};