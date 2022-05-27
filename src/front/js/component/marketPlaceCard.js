import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import "../../styles/home.css";
import { RatingStar } from "./ratingStar";


export const MarketPlaceCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="userCard">
                <Link className="list-group-item list-group-item-action" to={{
                    pathname: `/account/${props.user.id}`,
                    state: props.user,
                }}>
                    <div className="d-flex justify-content-between">
                        <div className="marketPlaceImgDiv">
                            <img className="img-fluid marketPlacePics" src="https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg" />
                        </div>
                        <div className="marketPlaceCardInfo">
                            <div className="userName"><h5 className="mb-1">{props.user.name}</h5></div>
                            <div className="d-flex">
                                <div className="services"><p className="mb-1">{props.user.services}</p></div>
                                <div className="prices"><p className="mb-1">${props.user.prices}</p></div>
                            </div>
                            <div className="zipCode"><small className="text-muted">{props.user.zip_code}</small></div>
                        </div>
                        <div>
                            <div className="rating"><RatingStar /></div>
                            <div className="format">{props.user.format}</div>
                        </div>
                    </div>
                    <div>
                    </div>
                </Link>
            </div>
        </div>

    );
};

MarketPlaceCard.propTypes = {
    match: PropTypes.object,
};

