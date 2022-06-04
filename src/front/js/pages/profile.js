import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    let professionalCard = store.accountUser.find((element) => {
        return element.id == props.match.params.id
    })

    const userInfo = {
        id: professionalCard.id,
        profilePicture: professionalCard.profilePicture,
        name: professionalCard.name,
        phone: professionalCard.phone,
        email: professionalCard.email,
        background: professionalCard.background,
        about: professionalCard.about,
        services: professionalCard.services,
        availability: professionalCard.availability,
        userType: professionalCard.userType
    }



    const contactUser = () => {
        console.log(userInfo.email)
        console.log(store.accountUser[0].email)
        let findUser = store.accountUser.filter((element) => {
            element.email == userInfo.email
        })
        console.log(findUser)
    }

    return (

        <div className="container profileBg">
            {/*------------------ Pro user view-------------------------------- */}

            <div className="container-box ">
                <div className="userInfo">
                    <div className="d-flex colorblue">
                        <img className="img-fluid profilePicture" src={userInfo.profilePicture} />
                        <div className="professionalCard">
                            <div className="userInfo d-flex colorred">
                                <div className="n">
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
                                <button type="button" className="btn btn-primary" onClick={(e) => { contactUser() }}>
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
