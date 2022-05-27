import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CompletedAppointments = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    const [appointments, setAppointment] = useState(store.calendarEntries);
    const [paidAppointments, setPaidAppointments] = useState([])

    function paidAppointmentFunction(appt, index) {
        paidAppointments.push(appt)
        return console.log(paidAppointments)
    }
    console.log(store.calendarEntries[0].startDate)


    let mappedAppointments = appointments.map((appt, index) => {
        return (
            <li className="list-group-item d-flex justify-content-between" key={index}>
                <div>{appt.text} </div>
                <div>
                    <button type="button" className="btn btn-outline-success" onClick={(e) => { paidAppointmentFunction(appt, index), removeAppt(appt, index) }}><i className="fas fa-check"></i> </button>
                </div>
            </li>
        );
    });

    let mappedPaidAppointments = paidAppointments.map((appt, index) => {
        return (
            <li className="list-group-item d-flex justify-content-between" key={index}>
                <div>{appt.text} </div>
                <div>
                    <button type="button" className="btn btn-outline-success" onClick={(e) => { paidAppointmentFunction(appt, index), removeAppt(appt, index) }}><i className="fas fa-check"></i> </button>
                </div>
            </li>
        );
    });



    function removeAppt(appt, index) {
        let filteredArray = appointments.filter((appt, i) => {
            return i != index;
        });
        setAppointment(filteredArray);
    }

    return (
        <div className="container">
            <div className="mainBox">
                <div className="inputDiv">
                    <div><h3>Completed appointments</h3></div>
                    <ul className="list-group">{mappedAppointments}</ul>
                </div>
                <div className="inputDiv">
                    <div><h3>Paid appointments</h3></div>
                    <ul className="list-group">{mappedPaidAppointments}</ul>
                </div>
            </div>
        </div>
    );
};


