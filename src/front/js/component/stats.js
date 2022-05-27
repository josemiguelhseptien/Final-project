import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Stats = (props) => {
    const { store, actions } = useContext(Context);


    const [statsEntry, setStatsEntry] = useState({
        userID: store.accountUser.id,
        dateEntered: "",
        scheduled: 0,
        completed: 0,
        canceled: 0,
    })

    const [scheduledAppts, setScheduledAppts] = useState(0)
    useEffect(() => setScheduledAppts(actions.displayTotalScheduled()), []);

    const [completedAppts, setCompletedAppts] = useState(0)
    useEffect(() => setCompletedAppts(actions.displayTotalCompleted()), []);

    const [canceledAppts, setCanceledAppts] = useState(0)
    useEffect(() => setCanceledAppts(actions.displayTotalCanceled()), []);



    return (
        <div className="container-fluid">
            {/* Form to enter Stats info */}
            <div>
                <form className="d-inline-flex">
                    <div className="mb-3 mx-2">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" id="dateEntered"
                            onChange={e => { setStatsEntry({ ...statsEntry, dateEntered: e.target.value }); }}
                        />
                    </div>
                    <div>
                        <label className="form-label">Scheduled</label>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
                                value={statsEntry.scheduled}
                                onChange={e => { setStatsEntry({ ...statsEntry, scheduled: e.target.value }); }}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="form-label">Completed</label>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
                                value={statsEntry.completed}
                                onChange={e => { setStatsEntry({ ...statsEntry, completed: e.target.value }); }}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="form-label">Canceled</label>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
                                value={statsEntry.canceled}
                                onChange={e => { setStatsEntry({ ...statsEntry, canceled: e.target.value }); }}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={(e) => {
                            actions.addUserStats(statsEntry), setScheduledAppts(actions.displayTotalScheduled()),
                                setCompletedAppts(actions.displayTotalCompleted()), setCanceledAppts(actions.displayTotalCanceled())
                        }}
                    >Submit</button>
                </form>
            </div>
            {/* Boxes to display Stats overview */}
            <div className="d-inline-flex">
                <div className="col-4 mx-5">
                    <h3>Total Scheduled</h3>
                    <div className="card">
                        <div className="card-body">
                            {scheduledAppts}
                        </div>
                    </div>
                </div>
                <div className="col-4 mx-5">
                    <h3>Total Completed</h3>
                    <div className="card">
                        <div className="card-body">
                            {completedAppts}
                        </div>
                    </div>
                </div>
                <div className="col-4 mx-5">
                    <h3>Total Canceled</h3>
                    <div className="card">
                        <div className="card-body">
                            {canceledAppts}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Stats.propTypes = {
    match: PropTypes.object,
};
