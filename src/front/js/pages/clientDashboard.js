import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "./../component/calendar";
import { Money } from "./../component/money";
import { Stats } from "./../component/stats";
import { ClientAppointments } from "../component/clientAppointments";


export const ClientDashboard = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [viewType, setViewType] = useState("appointments")


    return (
        <div className="container-fluid">
            <br></br>
            <div className="d-flex">
                <div className="d-inline-flex">
                    <div className="card card-body justify-content-center" style={{ width: "120px", minHeight: "80vh" }}>
                        <ul className="nav flex-column">
                            <li className="nav-item py-3">
                                <span onClick={() => setViewType("appointments")}>Appointments</span>
                            </li>
                            <li className="nav-item py-3">
                                <span onClick={() => setViewType("Providers")}>Providers</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {viewType == "Providers" ? (
                    <div className="d-inline-block mx-5">
                        <div>
                            <h3>Prospective Clients</h3>
                            <div>Card Row</div>
                        </div>
                        <div>
                            <h3>Find Client</h3>
                            <div>Search box</div>
                        </div>
                        <div>
                            <h3>Clients</h3>
                            <div>Card Row</div>
                        </div>
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
