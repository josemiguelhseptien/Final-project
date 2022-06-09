import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "./../component/calendar";
import { Money } from "./../component/money";
import { Stats } from "./../component/stats";
import { ClientAppointments } from "../component/clientAppointments";
import { ViewProviders } from "../component/viewProviders";


export const ClientDashboard = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [viewType, setViewType] = useState("appointments")


    return (
        <div className="container-fluid">
            <br></br>
            <div className="d-flex double">
                <div className="d-inline-flex">
                    <div className="card card-body justify-content-center" style={{ width: "150px", minHeight: "80vh" }}>
                        <ul className="nav flex-column">
                            <li className="nav-item mt-5 py-5">
                                <span onClick={() => setViewType("appointments")}>
                                    <i className="far fa-calendar-check fa-4x"></i>
                                    <h5>Appointments</h5>
                                </span>
                            </li>
                            <li className="nav-item py-5">
                                <span onClick={() => setViewType("Providers")}>
                                    <i className="far fa-user fa-4x"></i>
                                    <h5>Providers</h5>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {viewType == "Providers" ? (
                    <div className="d-inline-block mx-5">
                        {< ViewProviders />}
                    </div>
                ) : (null)}
                {viewType == "appointments" ? (
                    <div className="d-inline-block mx-5">
                        <div>
                            {<ClientAppointments />}
                        </div>
                    </div>
                ) : (null)}
            </div>
        </div>
    )
}

ClientDashboard.propTypes = {
    match: PropTypes.object,
};
