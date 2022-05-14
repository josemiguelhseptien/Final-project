import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="container-fluid">Login</div>
    );
};

Login.propTypes = {
    match: PropTypes.object
};