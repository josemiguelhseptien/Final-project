import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = props => {
    const { store, actions } = useContext(Context);
    const [loginInput, setLoginInput] = useState({
        id: "",
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
        <div className="padding paddingUp">
            <div className="container-fluid double size center ">

                <div >
                    <div className="loginBar mt-5"><h2>Login</h2></div>
                    <br></br>
                    <div className="userToggle d-flex justify-content-between">
                        <button type="button" className="btn button2 buttonColor" onClick={() => { clientUser() }}>Client</button>
                        <button type="button" className="btn button2 buttonColor" onClick={() => { proUser() }}>Professional</button>
                    </div>
                    <br></br>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" value={loginInput.email} onChange={e => {
                                setLoginInput({ ...loginInput, email: e.target.value });
                            }} placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" value={loginInput.password} onChange={e => {
                                setLoginInput({ ...loginInput, password: e.target.value });
                            }} placeholder="Password" id="exampleInputPassword1" />
                        </div>
                        {loginInput.userType == "client" ? (<Link to={{ pathname: "/" }}> <button type="button" className="btn button2 buttonColor" onClick={(e) => { actions.loginClient(loginInput) }}>Submit</button></Link>) : (<Link to={{ pathname: "/" }}> <button type="button" className="btn button2 buttonColor" onClick={(e) => { actions.loginProfessional(loginInput) }}>Submit</button></Link>)}

                    </form>
                </div>

            </div>
        </div>
    );
};

Login.propTypes = {
    match: PropTypes.object
};