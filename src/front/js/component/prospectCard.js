import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import "../../styles/home.css";
import { RatingStar } from "./ratingStar";


export const ProspectCard = (props) => {
    const { store, actions } = useContext(Context);
    let prospectInfo = {
        name: props.user.name,
        phone: props.user.phone,
        email: props.user.email,
    }

    return (
        <div className="card m-3">
            <div className="d-flex align-content-center pt-2" style={{ width: "18rem", height: "12rem" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{props.user.name}</h5>
                        <button className="btn deleteColor" title="Delete, this can't be undone!" onClick={() => actions.deleteProspect(prospectInfo)}><span>&#10005;</span></button>
                    </div>
                    <p className="card-text">{props.user.phone} </p>
                    <p className="card-text">{props.user.email} </p>
                    <div className="d-flex justify-content-center">
                        <button className="btn buttonColor3" title="Add to clients" onClick={() => actions.addToClientList(prospectInfo)}><h5 className="pt-2">Add to Clients</h5></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

ProspectCard.propTypes = {
    match: PropTypes.object,
};
