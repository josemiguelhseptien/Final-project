import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Account = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [profileType, setProfileType] = useState("professional")

    return (

        <div className="container">

            {profileType == "professional" ? (
                <div className="container-box">
                    <div className="userInfo">
                        <div className="d-flex">
                            <img className="profilePicture" src="https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg" />
                            <div className="professionalCard">
                                <div className="Name">Name</div>
                                <div className="email"><i class="fas fa-envelope"></i>email</div>
                                <div className="phone"><i class="fas fa-phone"></i>phone</div>
                                <div className="background"><i class="fas fa-school"></i>background</div>
                                <div className="pricing">pricing</div>
                            </div>
                        </div>
                    </div>
                    <div className="servicesCard">
                        <div className="services">Services</div>
                        <div>Math</div>
                    </div>

                    <div className="aboutCard">
                        <div className="aboutTitle">about Title</div>
                        <div className="aboutText">about text</div>
                    </div>

                    <div className="availabilityCard">
                        <div className="availability">availability</div>
                        <div>9-5</div>
                    </div>





                </div>

            ) : ("that")}


        </div>
    );
};

Account.propTypes = {
    match: PropTypes.object
};


