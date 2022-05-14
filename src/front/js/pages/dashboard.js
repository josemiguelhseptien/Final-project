import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="container-fluid">Dashboard</div>
    );
};

Dashboard.propTypes = {
    match: PropTypes.object
};