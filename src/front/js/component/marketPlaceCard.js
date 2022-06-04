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
        <div className="container-fluid colorblue">
            <div className="userCard ">
                <Link className="list-group-item list-group-item-action" to={{
                    pathname: `/profile/${props.user.id}`,
                    state: props.user,
                }}>
                    <div className="d-flex justify-content-between ">
                        <div className="marketPlaceImgDiv">
                            <img className="img-fluid marketPlacePics" src={props.user.profilePicture} />
                        </div>
                        <div className="marketPlaceCardInfo">
                            <div className="userName colorred"><h5 className="mb-1">{props.user.name}</h5></div>
                            <div className="d-flex">
                                <div className="services colorred"><p className="mb-1">{props.user.services}</p></div>
                                <div className="prices colorred"><p className="mb-1">${props.user.prices}</p></div>
                            </div>
                            <div className="zipCode"><small className="text-muted colorred">{props.user.zip_code}</small></div>
                        </div>
                        <div>
                            <div className="rating"><RatingStar /></div>
                            <div className="format onlineColor">{props.user.format}</div>
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

