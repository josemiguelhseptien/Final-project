import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Account = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    let accountUser = store.accountUser.find(element => {
        return element.id == props.match.params.id;
    });
    const [profileType, setProfileType] = useState("professional")

    const [modalInfo, setModalInfo] = useState({
        id: "1",
        name: accountUser.name,
        phone: accountUser.phone,
        email: accountUser.email,
        background: accountUser.background,
        about: accountUser.about,
        services: accountUser.services,
        availability: accountUser.availability
    })

    const userInfo = {
        id: "1",
        profilePicture: accountUser.profilePicture,
        name: accountUser.name,
        phone: accountUser.phone,
        email: accountUser.email,
        background: accountUser.background,
        about: accountUser.about,
        services: accountUser.services,
        availability: accountUser.availability
    }

    return (

        <div className="container">
            {/*------------------ Pro user view-------------------------------- */}
            {profileType == "professional" ? (
                <div className="container-box">
                    <div className="userInfo">
                        <div className="userCard d-flex">
                            <img className="profilePicture" src={userInfo.profilePicture} />
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
                    <div className="servicesCard">
                        <div className="services">Services</div>
                        <div>Math</div>
                    </div>
                    <div className="availabilityCard">
                        <div className="availability">availability</div>
                        <div>M-F 9-5</div>
                    </div>
                    <div>
                        {/*------------------ Pro user modal-------------------------------- */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Edit profile
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <div>
                                                <label htmlFor="exampleFormControlFile1">Profile picture</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" accept=".jpg, .jpeg, .png" onChange={e => {
                                                    setModalInfo({ ...modalInfo, profilePicture: e.target.result });
                                                }} />
                                            </div>
                                            <div>
                                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                                <input type="text" className="form-control" placeholder={userInfo.name} aria-label="Username" aria-describedby="basic-addon1" value={modalInfo.name ? modalInfo.name : userInfo.name} onChange={e => {
                                                    setModalInfo({ ...modalInfo, name: e.target.value });
                                                }} />
                                                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                                <input type="text" className="form-control" placeholder={userInfo.phone} aria-label="Phone" aria-describedby="basic-addon1" value={modalInfo.phone ? modalInfo.phone : userInfo.phone} onChange={e => {
                                                    setModalInfo({ ...modalInfo, phone: e.target.value });
                                                }} />
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                <input type="text" className="form-control" placeholder={userInfo.email} aria-label="Email" aria-describedby="basic-addon1" value={modalInfo.email ? modalInfo.email : userInfo.email} onChange={e => {
                                                    setModalInfo({ ...modalInfo, email: e.target.value });
                                                }} />
                                                <label htmlFor="exampleInputEmail1" className="form-label">Background</label>
                                                <input type="text" className="form-control" placeholder={userInfo.background} aria-label="Background" aria-describedby="basic-addon1" value={modalInfo.background ? modalInfo.background : userInfo.background} onChange={e => {
                                                    setModalInfo({ ...modalInfo, background: e.target.value });
                                                }} />
                                                <label htmlFor="exampleInputEmail1" className="form-label">About</label>
                                                <input type="text" className="form-control" placeholder={userInfo.about} aria-label="About" aria-describedby="basic-addon1" rows="4" cols="100" value={modalInfo.about ? modalInfo.about : userInfo.about} onChange={e => {
                                                    setModalInfo({ ...modalInfo, about: e.target.value });
                                                }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div>Services</div>
                                            <div>availability</div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={(e) => { actions.editUserInfo(modalInfo) }}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="userInfo">
                        <div className="userCard d-flex">
                            <img className="profilePicture" src={userInfo.profilePicture} />
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
                    <div className="servicesCard">
                        <div className="services">Services</div>
                        <div>Math</div>
                    </div>
                    <div className="availabilityCard">
                        <div className="availability">availability</div>
                        <div>M-F 9-5</div>
                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Contact media
                    </button>
                </div>
            )}
        </div>
    );
};

Account.propTypes = {
    match: PropTypes.object
};


