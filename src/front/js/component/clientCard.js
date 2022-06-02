import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import "../../styles/home.css";
import { RatingStar } from "./ratingStar";


export const ClientCard = (props) => {
    const { store, actions } = useContext(Context);
    let client = props.user.name

    return (
        <div className="card">
            <div style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">{props.user.phone} </p>
                    <p className="card-text">{props.user.email} </p>
                    <button
                        className="btn btn-danger"
                        title="Delete, this can't be undone!"
                        onClick={() => actions.deleteClient(client)}
                    >
                        <span>&#10005;</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

ClientCard.propTypes = {
    match: PropTypes.object,
};
