import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "./../component/calendar";


export const Dashboard = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [profileType, setProfileType] = useState("professional")
    const [viewType, setViewType] = useState("calendar")


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
                    </div>
                    {viewType == "calendar" ? (
                        <div className="d-inline-block mx-5">
                            <div>
                                <h3>Calendar</h3>
                            </div>
                            <div>
                                <Calendar />
                            </div>
                        </div>
                    ) : (null)}
                    {viewType == "money" ? (
                        <div className="d-inline-block mx-5">
                            <div>
                                <h3>Your Money</h3>
                                <div>
                                    <form className="d-inline-flex">
                                        <div className="mb-3 mx-2">
                                            <label className="form-label">Date</label>
                                            <input type="date" className="form-control" id="incomeDate" />
                                        </div>
                                        <div>
                                            <label className="form-label">Earned</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">$</span>
                                                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="form-label">Paid</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">$</span>
                                                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="form-label">Owed</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">$</span>
                                                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="d-inline-flex">
                                <div className="mx-5">
                                    <h3>Total Earned</h3>
                                    <div class="card">
                                        <div class="card-body">
                                            0
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-5">
                                    <h3>Total Paid</h3>
                                    <div class="card">
                                        <div class="card-body">
                                            0
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-5">
                                    <h3>Total Owed</h3>
                                    <div class="card">
                                        <div class="card-body">
                                            0
                                        </div>
                                    </div>
                                </div>
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
                                <h3>Bookt Chart</h3>
                                <div>Inputs: Daily log with appointments scheduled, completed, canceled</div>
                            </div>
                            <div>
                                <h3>API Chart</h3>
                                <div>bar and line graph: scheduled-bar, completed & canceled line for the last 30 days</div>
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
