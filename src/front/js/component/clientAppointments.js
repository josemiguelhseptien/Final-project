import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const ClientAppointments = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");

    let appointments = store.clientAppointments.filter(
        (elm) => !(elm.paid || elm.cancelled)
    );



    let paidAppointments = store.calendarEntries.filter((elm) => elm.paid);
    let cancelledCalendarEntries = store.calendarEntries.filter(
        (elm) => elm.cancelled
    );



    let mappedAppointments = appointments.map((appt, index) => {
        paidAppointments.find((element) => {
            if (element.startDate == appt.startDate) appt.remove()
        })

        return (
            <li
                className="list-group-item d-flex li_glow justify-content-between"
                key={index}
            >
                <div>
                    <div><h5>{appt.text}</h5> </div>
                    <div><p>{appt.description}</p> </div>
                    <div><p>Start time : {appt.startDate.toString()}</p></div>
                </div>
                <div>
                    {appt.completed ? (
                        <>
                            <button
                                type="button"
                                className="btn btn-success mx-1"
                                onClick={(e) => {
                                    actions.editCalendarEntry(appt.text, "completed");
                                }}
                            >
                                Completed
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-warning mx-1"
                                onClick={(e) => {
                                    actions.editCalendarEntry(appt.text, "paid");
                                    actions.editUserStats(appt.startDate, "completed");
                                }}
                            >
                                Pay
                            </button>
                        </>
                    ) : (
                        <>
                            {appt.toConfirm ? <button className="btn buttonColor mx-1" disabled >pending confirmation</button> : <button
                                type="button"
                                onClick={(e) => {
                                    actions.editCalendarEntry(appt.text, "completed"),
                                        appt.toConfirm = "completed",
                                        console.log(appt)
                                }}
                                className="btn buttonColor3 mx-1"
                            >
                                Pay appointment
                            </button>}
                        </>
                    )}
                </div>
            </li>
        );
    });

    let mappedPaidAppointments = paidAppointments.map((appt, index) => {
        return (
            <li
                className="list-group-item li_glow d-flex justify-content-between"
                key={index}
            >
                <div>
                    <div><h5>{appt.text}</h5> </div>
                    <div><p>{appt.description}</p> </div>
                    <div><p>Start time : {appt.startDate.toString()}</p></div>
                </div>
                <div>
                    <button type="button" className="btn buttonColor3Completed" disabled>
                        Paid!
                    </button>
                </div>
            </li>
        );
    });

    let mappedCancelledAppointments = cancelledCalendarEntries.map(
        (appt, index) => {
            return (
                <li
                    className={appt.completed ? "btn btn-success mx-1" : "btn btn-outline-warning mx-1"}

                    key={index}
                >
                    <div>
                        <div><h5>{appt.text}</h5> </div>
                        <div><p>{appt.description}</p> </div>
                        <div><p>Start time : {appt.startDate.toString()}</p></div>
                    </div>
                    <div>
                        <button type="button" className="btn deleteColorSolid" disabled>
                            Cancelled
                        </button>
                    </div>
                </li>
            );
        }
    );


    return (
        <div className="container-fluid">
            <div className="mainBox">
                <div className=" my-3">
                    <h3>Appointments</h3>
                </div>
                <br></br>
                <div className="inputDiv">
                    <div className="mb-1">
                        <h3>Scheduled appointments</h3>
                    </div>
                    <ul className="list-group">
                        {mappedAppointments.length == 0 ? (
                            <div className="list-group-item">
                                <span><h5>There are no pending appointments</h5></span>
                            </div>
                        ) : (mappedAppointments)}
                    </ul>
                </div>
                <br></br>
                <div className="inputDiv">
                    <div className="mt-3 mb-1">
                        <h3>Confirmed Paid</h3>
                    </div>
                    <ul className="list-group">
                        <li
                            className="list-group-item li_glow d-flex justify-content-between"
                        >
                            <div>
                                <div><h5>Justin Stevens</h5> </div>
                                <div><p>done</p> </div>
                                <div><p>Start time : Tue May 10 2022 12:30:00 GMT-0400 (Eastern Daylight Time)</p></div>
                            </div>
                            <div>
                                <button type="button" className="btn buttonColor3Completed" disabled>
                                    Paid!
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};