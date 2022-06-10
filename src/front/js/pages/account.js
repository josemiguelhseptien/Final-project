import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RatingStar } from "../component/ratingStar";

export const Account = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();


    const [userType, setuserType] = useState("professional")

    const [modalInfo, setModalInfo] = useState({
        id: store.loggedUser.id,
        name: store.loggedUser.name,
        phone: store.loggedUser.phone,
        email: store.loggedUser.email,
        background: store.loggedUser.background,
        about: store.loggedUser.about,
        services: store.loggedUser.services,
        availability: store.loggedUser.availability,
        userType: store.loggedUser.userType,
        prices: store.loggedUser.prices
    })

    const userInfo = {
        id: store.loggedUser.id,
        profilePicture: store.loggedUser.profilePicture,
        name: store.loggedUser.name,
        phone: store.loggedUser.phone,
        email: store.loggedUser.email,
        background: store.loggedUser.background,
        about: store.loggedUser.about,
        services: store.loggedUser.services,
        availability: store.loggedUser.availability,
        userType: store.loggedUser.userType
    }

    const [showModal, setShowModal] = useState(false)



    return (

        <div className="container">
            {/*------------------ Pro user view-------------------------------- */}

            <div className="container-box double" >
                <div className="userInfo">
                    <div className="d-flex ">
                        <img className="img-fluid profilePicture" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" />
                        <div className="professionalCard">
                            <div className="userInfo d-flex">
                                <div>
                                    <div className="Name">Justin Stevens{userInfo.name}</div>
                                    <div className="email paddingUp"><i className="fas fa-envelope">jstevens@mail.com</i>{userInfo.email}</div>
                                    <div className="phone paddingUp"><i className="fas fa-phone"></i>4896415154{userInfo.phone}</div>
                                    <div className="background paddingUp"> <i className="fas fa-school">Florida International University</i>{userInfo.background}</div>
                                </div>
                                <div className="userRating"><RatingStar /></div>
                            </div>
                            <div className="aboutCard ">
                                <div className="aboutTitle paddingUp">about me</div>
                                <div className="aboutText paddingUp">Teacher for 5 years, K-12 grades{userInfo.about}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" flex-container">Services</div>
                    <div className="flex-container">Science & English tutoring</div>
                </div>
                <div className="availabilityCard">
                    <div className="availability flex-container">availability</div>
                    <div className="flex-container">M-F 9-5</div>
                </div>

                <div className="flex-container">
                    {/*------------------ Pro user modal-------------------------------- */}
                    <button
                        type="button"
                        className="btn buttonColor button2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@getbootstrap">
                        edit contact
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
                                    <h5 className="modal-title" id="exampleModalLabel">Update account information</h5>
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
                                            <input type="text" className="form-control" placeholder={userInfo.name} aria-label="Username" aria-describedby="basic-addon1" value={modalInfo.name} onChange={e => {
                                                setModalInfo({ ...modalInfo, name: e.target.value });
                                            }} />
                                            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                            <input type="text" className="form-control" placeholder={userInfo.phone} aria-label="Phone" aria-describedby="basic-addon1" value={modalInfo.phone} onChange={e => {
                                                setModalInfo({ ...modalInfo, phone: e.target.value });
                                            }} />
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                            <input type="text" className="form-control" placeholder={userInfo.email} aria-label="Email" aria-describedby="basic-addon1" value={modalInfo.email} onChange={e => {
                                                setModalInfo({ ...modalInfo, email: e.target.value });
                                            }} />
                                            <label htmlFor="exampleInputEmail1" className="form-label">Background</label>
                                            <input type="text" className="form-control" placeholder={userInfo.background} aria-label="Background" aria-describedby="basic-addon1" value={modalInfo.background} onChange={e => {
                                                setModalInfo({ ...modalInfo, background: e.target.value });
                                            }} />
                                            <label htmlFor="exampleInputEmail1" className="form-label">About</label>
                                            <input type="text" className="form-control" placeholder={userInfo.about} aria-label="About" aria-describedby="basic-addon1" rows="4" cols="100" value={modalInfo.about} onChange={e => {
                                                setModalInfo({ ...modalInfo, about: e.target.value });
                                            }} />
                                        </div>

                                    </div>
                                    <div>
                                        <div>Services</div>
                                        <div>availability</div>
                                    </div>
                                </div><div>


                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-info" onClick={(e) => { actions.editUserInfo(modalInfo), console.log(store.accountUser) }}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

Account.propTypes = {
    match: PropTypes.object
};


