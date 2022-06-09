import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ClientCard } from "./../component/clientCard";
import { ProspectCard } from "./../component/prospectCard";


export const ViewProviders = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container-fluid">
            <br></br>
            <div>
                <h3 className="my-5">Your Providers</h3>
                <div className="cardRow mb-5">
                    <div className="card m-3">
                        <div style={{ width: "18rem", height: "21rem" }}>
                            <div className="card-body">
                                <img src={store.accountUser[0].profilePicture} className="card-img-top" />
                                <h5 className="card-title my-4">{store.accountUser[0].name}</h5>
                                <p className="card-text">{store.accountUser[0].phone} </p>
                                <p className="card-text">{store.accountUser[0].email} </p>
                            </div>
                        </div>
                    </div>
                    <div className="card m-3">
                        <div style={{ width: "18rem", height: "21rem" }}>
                            <div className="card-body">
                                <img src={store.accountUser[1].profilePicture} className="card-img-top" />
                                <h5 className="card-title my-4">{store.accountUser[1].name}</h5>
                                <p className="card-text">{store.accountUser[1].phone} </p>
                                <p className="card-text">{store.accountUser[1].email} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ViewProviders.propTypes = {
    match: PropTypes.object,
};