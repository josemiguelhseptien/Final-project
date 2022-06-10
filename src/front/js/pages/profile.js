import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RatingStar } from "../component/ratingStar";

export const Profile = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    let professionalCard = store.accountUser.find((element) => {
        return element.id == props.match.params.id
    })

    const userInfo = {
        id: professionalCard.id,
        zip_code: professionalCard.zip_code,
        profilePicture: professionalCard.profilePicture,
        name: professionalCard.name,
        phone: professionalCard.phone,
        email: professionalCard.email,
        background: professionalCard.background,
        about: professionalCard.about,
        services: professionalCard.services,
        availability: professionalCard.availability,
        userType: professionalCard.userType,
        prices: professionalCard.prices,
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

        <div className="container double">
            {/*------------------ Pro user view-------------------------------- */}

            <div className="container-box height2">
                <div className="userInfo">
                    <div className="d-flex userInfo ">
                        <img className="img-fluid profilePicture" src={userInfo.profilePicture} />
                        <div className="professionalCard">
                            <div className="userInfo d-flex colorred">
                                <div className="n">
                                    <div className="Name">{userInfo.name}</div>
                                    <div className="email"><i className="fas fa-envelope"></i>{userInfo.email}</div>
                                    <div className="phone"><i className="fas fa-phone"></i>{userInfo.phone}</div>
                                    <div className="background"><i className="fas fa-map-marker-alt"></i>{userInfo.zip_code}</div>
                                </div>
                                <div className="userRating"><RatingStar /></div>
                            </div>
                            <div className="aboutCard d-flex">
                                <div className="aboutTitle">About Me: </div>
                                <div className="aboutText">{userInfo.about}</div>
                            </div>


                            <div className="servicesCard colorred d-flex">
                                <div className="services">Services:</div>
                                <div className="colorred"> {userInfo.services}</div>
                            </div>
                            <div className="servicesCard colorred d-flex">
                                <div className="services">Prices:</div>
                                <div className="colorred"> ${userInfo.prices}</div>
                            </div>

                        </div>


                    </div>


                </div>
            </div>
            <div className="flex-container">
                <button
                    type="button"
                    className="nav-btn btn button2"
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
                                <button type="button" className="nav-btn btn button2 " onClick={(e) => { contactUser() }}>
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
