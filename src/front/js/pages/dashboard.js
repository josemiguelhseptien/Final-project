import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "./../component/calendar";
import { Money } from "./../component/money";
import { Stats } from "./../component/stats";
import { CompletedAppointments } from "../component/completedAppointments";


export const Dashboard = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [profileType, setProfileType] = useState("professional")
    const [viewType, setViewType] = useState("appointments")


    return (
        <div className="container-fluid">
            {profileType == "professional" ? (
                <div>
                    <div className="d-inline-flex">
                        <div className="card card-body justify-content-center" style={{ width: "100px", minHeight: "80vh" }}>
                            <ul className="nav flex-column">
                                <li className="nav-item py-3">
                                    <span onClick={() => setViewType("appointments")}>Appointments</span>
                                </li>
                                <li className="nav-item py-3">
                                    <span onClick={() => setViewType("calendar")}>Calendar</span>
                                </li>
                                <li className="nav-item py-3">
                                    <span onClick={() => setViewType("money")}>Money</span>
                                </li>
                                <li className="nav-item py-3">
                                    <span onClick={() => setViewType("stats")}>Stats</span>
                                </li>
                                <li className="nav-item py-3">
                                    <span onClick={() => setViewType("clients")}>Clients</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {viewType == "calendar" ? (
                        <div className="d-inline-block mx-5">
                            <div>
                                <h3>Calendar</h3>
                            </div>
                            <div>
                                {< Calendar />}
                            </div>
                        </div>
                    ) : (null)}
                    {viewType == "money" ? (
                        <div className="d-inline-block mx-5">
                            <div>
                                <h3>Your Money</h3>
                            </div>
                            <div>
                                {< Money />}
                            </div>
                            <div>
                                <h3>Income Chart</h3>
                                <div>bar graph for the last 30 days</div>
                            </div>
                        </div>
                    ) : (null)}
                    {viewType == "stats" ? (
                        <div className="d-inline-block mx-5">
                            <div>
                                <h3>Appointment Stats</h3>
                                <div>
                                    {< Stats />}
                                </div>
                            </div>
                            <div>
                                <h3>API Chart</h3>
                                <div>bar and line graph: scheduled-bar, completed and canceled line for the last 30 days</div>
                            </div>
                        </div>
                    ) : (null)}
                    {viewType == "clients" ? (
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
                                Appointments
                            </div>
                            <div>
                                {<CompletedAppointments />}
                            </div>
                        </div>
                    ) : (null)}
                </div>
            ) : (
                <div className="d-inline-block mx-5">
                    <div>
                        <h3>Payment Owed</h3>
                        <div>Card Row</div>
                    </div>
                    <div>
                        <h3>Your Schedule</h3>
                        <div>calendar</div>
                    </div>
                    <div>
                        <h3>Your Providers</h3>
                        <div>Card Row</div>
                    </div>
                </div>
            )}

        </div>
    )
}

Dashboard.propTypes = {
    match: PropTypes.object,
};
