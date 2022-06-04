import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();


    const [userType, setuserType] = useState("professional")
    const [accountUser, setAccountUser] = useState(store.accountUser[0])

    const userInfo = {
        id: "1",
        profilePicture: accountUser.profilePicture,
        name: accountUser.name,
        phone: accountUser.phone,
        email: accountUser.email,
        background: accountUser.background,
        about: accountUser.about,
        services: accountUser.services,
        availability: accountUser.availability,
        userType: accountUser.userType
    }

    return (

        <div className="container">
            {/*------------------ Pro user view-------------------------------- */}

            <div className="container-box">
                <div className="userInfo">
                    <div className=" d-flex double">
                        <img className="img-fluid profilePicture" src="https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg" />
                        <div className="professionalCard">
                            <div className="userInfo d-flex">
                                <div>
                                    <div className="Name">{userInfo.name}</div>
                                    <div className="email"><i className="fas fa-envelope"></i>{userInfo.email}</div>
                                    <div className="phone"><i className="fas fa-phone"></i>{userInfo.phone}</div>
                                    <div className="background"><i className="fas fa-school"></i>{userInfo.background}</div>
                                </div>
                                <div className="userRating">*****</div>
                            </div>
                            <div className="aboutCard">
                                <div className="aboutTitle">about Title</div>
                                <div className="aboutText">{userInfo.about}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicesCard colorred">
                    <div className="services">Services</div>
                    <div>Math</div>
                </div>
                <div className="availabilityCard colorred">
                    <div className="availability">availability</div>
                    <div>M-F 9-5</div>
                </div>

            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap">
                    Send contact
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Send contact information
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-info">
                                    Send info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

Profile.propTypes = {
    match: PropTypes.object
};
