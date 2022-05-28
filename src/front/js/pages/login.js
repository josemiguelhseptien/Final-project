import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = props => {
    const { store, actions } = useContext(Context);
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
        userType: "client"
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
        <div className="container-fluid ">

            <div className="loginCard">
                <div className="loginBar"><h2>Login</h2></div>
                <br></br>
                <div className="userToggle d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" onClick={() => { clientUser() }}>Client</button>
                    <button type="button" className="btn btn-primary" onClick={() => { proUser() }}>Professional</button>
                </div>
                <br></br>
                <form>
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
                    <Link to={{ pathname: "/dashboard" }}> <button type="button" className="btn btn-primary" onClick={(e) => { actions.loginUser(loginInput) }}>Submit</button></Link>



                </form>
            </div>


        </div>
    );
};

Login.propTypes = {
    match: PropTypes.object
};