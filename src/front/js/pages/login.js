import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = props => {
    const { store, actions } = useContext(Context);
    const [loginInput, setLoginInput] = useState({
        username: "",
        email: "",
        password: "",
        userType: ""
    })

    const proUser = () => {
        setLoginInput({ ...loginInput, userType: "professional" })
        console.log(loginInput.userType)
    }
    const clientUser = () => {
        setLoginInput({ ...loginInput, userType: "client" })
        console.log(loginInput.userType)
    }

    const params = useParams();

    return (
        <div className="container-fluid">
            <div className="loginCard">
                <div className="userToggle d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" onClick={() => { clientUser() }}>Client</button>
                    <button type="button" className="btn btn-primary" onClick={() => { proUser() }}>Professional</button>
                </div>

                <form>
                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">Username</label>
                        <input type="text" className="form-control" value={loginInput.username} onChange={e => {
                            setLoginInput({ ...loginInput, username: e.target.value });
                        }}
                            placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={loginInput.email} onChange={e => {
                            setLoginInput({ ...loginInput, email: e.target.value });
                        }} placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={loginInput.password} onChange={e => {
                            setLoginInput({ ...loginInput, password: e.target.value });
                        }} id="exampleInputPassword1" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => { console.log(loginInput) }}>Submit</button>
                </form>
            </div>


        </div>
    );
};

Login.propTypes = {
    match: PropTypes.object
};