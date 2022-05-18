import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [inputField, setInputField] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        location: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputField);
        setInputField({ first_name: "", last_name: "", email: "", password: "", phone_number: "", location: "" });
    };

    const handleChange = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value });
    };


    return (
        <div className="container-fluid size">
            <div className="center">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Student</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Professional</button>
                    </li>

                </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className="center"><span>SIGN UP</span></div>
                    <div className="input-group mb-3">
                        <input type="text" name="first_name" className="form-control" placeholder="First name" onChange={handleChange} value={inputField.first_name} />
                        <input type="text" name="Last_name" className="form-control" placeholder="Last name" onChange={handleChange} value={inputField.last_name} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" name="email" aria-describedby="inputGroup-sizing-default" placeholder="Email" onChange={handleChange} value={inputField.email} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" name="password" aria-describedby="inputGroup-sizing-default" placeholder="Password" onChange={handleChange} value={inputField.password} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="phonenumber" className="form-control" name="phone_number" aria-describedby="inputGroup-sizing-default" placeholder="Phone number" onChange={handleChange} value={inputField.phone_number} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="location" aria-describedby="inputGroup-sizing-default" placeholder="city, state" onChange={handleChange} value={inputField.location} />
                    </div>

                    <div className="center">
                        <button onClick={handleSubmit} type="button" className="btn btn-primary">Sign up</button>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                    </div>

                </div>


                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <div className="center"><span className="mb-3"> SIGN UP</span></div>

                    <div className="input-group mb-3">
                        <input type="text" aria-label="First name" className="form-control" placeholder="First name" />
                        <input type="text" aria-label="Last name" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Email" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Password" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Phone number" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="city, state" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Email" />
                    </div>

                    <div className="input-group mb-3">
                        <select className="form-select" id="inputGroupSelect01">
                            <option value="-1">Choose a subject to teach</option>
                            <option value="1">Math</option>
                            <option value="2">English</option>
                            <option value="3">Science</option>
                        </select>
                    </div>

                    <div className="center">
                        <button type="button" className="btn btn-primary">Sign up</button>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

SignUp.propTypes = {
    match: PropTypes.object

};