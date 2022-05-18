import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [profileType, setProfileType] = useState("professional")
    const [viewType, setViewType] = useState("glance")

    return (
        <div className="container-fluid">
            {profileType == "professional" ? (
                <div>
                    <p>
                        <button className="btn btn-secondary-outline mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            Menu
                        </button>
                    </p>
                    <div className="d-inline-flex">
                        <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="card card-body justify-content-center" style={{ width: "50px", minHeight: "80vh" }}>
                                <ul className="nav flex-column">
                                    <li className="nav-item py-3">
                                        <span onClick={() => setViewType("glance")}>Glance</span>
                                    </li>
                                    <li className="nav-item py-3">
                                        <span onClick={() => setViewType("calendar")}>Calendar</span>
                                    </li>
                                    <li className="nav-item py-3">
                                        <span onClick={() => setViewType("money")}>Money</span>
                                    </li>
                                    <li className="nav-item py-3">
                                        <span onClick={() => setViewType("graph")}>ShowGraph</span>
                                    </li>
                                    <li className="nav-item py-3">
                                        <span onClick={() => setViewType("clients")}>Clients</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline mx-5">
                        {viewType == "glance" ? ("glance") : (null)}
                        {viewType == "calendar" ? ("calendar") : (null)}
                        {viewType == "money" ? ("money") : (null)}
                        {viewType == "graph" ? ("graph") : (null)}
                        {viewType == "clients" ? ("clients") : (null)}
                    </div>
                </div>
            ) : ("that")}
        </div>
    );
};

Dashboard.propTypes = {
    match: PropTypes.object
};