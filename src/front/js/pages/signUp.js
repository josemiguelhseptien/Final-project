import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { func } from "prop-types";

export const SignUp = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [inputField, setInputField] = useState({
        id: "2",
        name: '',
        email: '',
        password: '',
        phone: '',
        zip_code: '',
        service: [],
        prices: [],
        userType: "client"
    })


    const proUser = () => {
        setInputField({ ...inputField, userType: "professional" })
        console.log(inputField.userType)
    }
    const clientUser = () => {
        setInputField({ ...inputField, userType: "client" })
        console.log(inputField.userType)
    }

    const [serviceLines, setServiceLines] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();

        setInputField({ name: "", email: "", password: "", phone: "", zip_code: "" });
    };

    const handleChange = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value });
    };


    function addService(e) {
        setServiceLines == serviceLines + 1
    }
    function subtractService(e) {
        setServiceLines == serviceLines - 1
    }


    function serviceFunction(e) {
        for (let i = 0; i <= serviceLines; i++) {
            return (<input type="text" className="form-control" name="service" aria-describedby="inputGroup-sizing-default" onChange={handleChange} />)
        }
    }



    return (
        <div className="container-fluid size">
            <div className="center">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e) => { clientUser() }}>Client</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e) => { proUser() }}>Professional</button>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className="center"><span>SIGN UP</span></div>
                    <div className="input-group mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Name" onChange={handleChange} value={inputField.name} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" name="email" aria-describedby="inputGroup-sizing-default" placeholder="Email" onChange={handleChange} value={inputField.email} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" name="password" aria-describedby="inputGroup-sizing-default" placeholder="Password" onChange={handleChange} value={inputField.password} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="phonenumber" className="form-control" name="phone" aria-describedby="inputGroup-sizing-default" placeholder="Phone number" onChange={handleChange} value={inputField.phone} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="zip_code" aria-describedby="inputGroup-sizing-default" placeholder="Zip code" onChange={handleChange} value={inputField.zip_code} />
                    </div>
                </div>


                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <div className="center"><span>SIGN UP</span></div>
                    <div className="input-group mb-3">

                        <input type="text" aria-label="Name" className="form-control" name="name" placeholder="Name" onChange={handleChange} value={inputField.name} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" name="email" aria-describedby="inputGroup-sizing-default" placeholder="Email" onChange={handleChange} value={inputField.email} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" name="password" aria-describedby="inputGroup-sizing-default" placeholder="Password" onChange={handleChange} value={inputField.password} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" name="phone" aria-describedby="inputGroup-sizing-default" placeholder="Phone" onChange={handleChange} value={inputField.phone} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" name="zip_code" aria-describedby="inputGroup-sizing-default" placeholder="Zip code" onChange={handleChange} value={inputField.zip_code} />
                    </div>

                    <div className="d-flex justify-content-between mb-3">

                        <div> Services</div>
                        <div>
                            <button type="button" className="btn btn-secondary" onClick={(e) => { addService() }}>+</button>
                            <button type="button" className="btn btn-secondary" onClick={(e) => { subtractService() }}>-</button>

                        </div>

                    </div>
                    <div className="mb-3">
                        {serviceFunction()}
                    </div>

                </div>
                <div className="center">
                    <button type="button" className="btn btn-primary" onClick={(e) => { actions.addUser(inputField), console.log(inputField) }}>Sign up</button>
                </div>
            </div>
        </div>
    );
};

SignUp.propTypes = {
    match: PropTypes.object

};