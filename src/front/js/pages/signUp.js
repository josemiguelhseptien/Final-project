import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { func } from "prop-types";

export const SignUp = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [inputField, setInputField] = useState({
        id: "4",
        name: '',
        email: '',
        password: '',
        phone: '',
        zip_code: '',
        services: "",
        prices: 0,
        format: "",
        userType: "client"
    })

    const [userType, setUserType] = useState("client");



    const proUser = () => {
        setInputField({ ...inputField, userType: "professional" })
        console.log(inputField.userType)
    }
    const clientUser = () => {
        setInputField({ ...inputField, userType: "client" })
        console.log(inputField.userType)
    }

    const handleChange = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value });
    };

    return (

        <div className="paddingUp">
            <div className="container-fluid size double height3 center">
                <div>
                    <br></br>
                    <br></br>
                    <div className="center"><h3>SIGN UP</h3></div>
                    <br />
                    <br />
                    <ul className="nav nav-pills d-flex d-flex justify-content-between" id="pills-tab" role="tablist">
                        <li className="b" role="presentation">
                            <button className={userType == "client" ? "btn button2 buttonColor active" : "btn buttonColor2"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e) => { setUserType("client"), clientUser() }}>Client</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={userType == "professional" ? "btn button2 buttonColor active" : "btn buttonColor2"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e) => { setUserType("professional"), proUser() }}>Professional</button>
                        </li>
                    </ul>
                    <br />

                </div>
                {userType == "client" ? (

                    <div className="show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">

                        <div className="input-group mb-3">
                            <input type="text" name="name" className="form-control" required placeholder="Name" onChange={handleChange} value={inputField.name} />

                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" required name="email" aria-describedby="inputGroup-sizing-default" placeholder="Email" onChange={handleChange} value={inputField.email} />
                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" required name="password" aria-describedby="inputGroup-sizing-default" placeholder="Password" onChange={handleChange} value={inputField.password} />
                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type="phonenumber" className="form-control" required name="phone" aria-describedby="inputGroup-sizing-default" placeholder="Phone number" onChange={handleChange} value={inputField.phone} />
                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" required name="zip_code" aria-describedby="inputGroup-sizing-default" placeholder="Zip code" onChange={handleChange} value={inputField.zip_code} />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                ) : (

                    <div className="show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <div className="input-group mb-3">
                            <input type="text" aria-label="Name" className="form-control" required name="name" placeholder="Name" onChange={handleChange} value={inputField.name} />
                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" required name="email" aria-describedby="inputGroup-sizing-default" placeholder="Email" onChange={handleChange} value={inputField.email} />
                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" required name="password" aria-describedby="inputGroup-sizing-default" placeholder="Password" onChange={handleChange} value={inputField.password} />
                        </div>
                        <br />
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" required aria-label="Sizing example input" name="phone" aria-describedby="inputGroup-sizing-default" placeholder="Phone" onChange={handleChange} value={inputField.phone} />
                        </div>
                        <br />

                        <div className="input-group  d-flex justify-content-between">
                            <input type="text" className="form-control" required aria-label="Sizing example input" name="zip_code" aria-describedby="inputGroup-sizing-default" placeholder="Zip code" onChange={handleChange} value={inputField.zip_code} />

                            <div >
                                <button type="button" className="signupbtn btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {inputField.format == "" ? "select service format" : inputField.format}
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="pointer list-group-item list-group-item-action" onClick={(e) => { setInputField({ ...inputField, format: "Online only" }) }}>Online only</li>
                                    <li className="pointer list-group-item list-group-item-action" onClick={(e) => { setInputField({ ...inputField, format: "In-person only" }) }}>In-person only</li>
                                    <li className="pointer list-group-item list-group-item-action" onClick={(e) => { setInputField({ ...inputField, format: "Online and in-person" }) }}>Online and in-person</li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <br></br>
                        <div className="mb-3 d-flex">
                            <input type="text" placeholder="Services" className="form-control" required name="services" aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={inputField.services} />
                            <input type="number" placeholder="Prices" className="form-control" required name="prices" aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={inputField.prices} />
                        </div>
                    </div>
                )}
                <br />
                <div className="center">
                    <Link to="/dashboard">
                        <button type="button" className="btn button2 buttonColor" onClick={(e) => { actions.addUser(inputField, userType), console.log(inputField) }}>Sign up</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

SignUp.propTypes = {
    match: PropTypes.object

};