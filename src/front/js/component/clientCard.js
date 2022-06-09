import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import "../../styles/home.css";
import { RatingStar } from "./ratingStar";


export const ClientCard = (props) => {
    const { store, actions } = useContext(Context);
    let client = {
        name: props.user.name,
        phone: props.user.phone,
        email: props.user.email,
    }

    return (
        <div className="card m-3">
            <div className="d-flex align-content-middle pt-4" style={{ width: "18rem", height: "12rem" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{props.user.name}</h5>
                        <button
                            className="btn deleteColor"
                            title="Delete, this can't be undone!"
                            onClick={() => actions.deleteClient(client)}
                        >
                            <span>&#10005;</span>
                        </button>
                    </div>
                    <p className="card-text">{props.user.phone} </p>
                    <p className="card-text">{props.user.email} </p>
                </div>
            </div>
        </div>

    );
};

ClientCard.propTypes = {
    match: PropTypes.object,
};
