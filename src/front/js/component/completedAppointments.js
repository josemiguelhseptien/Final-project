import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CompletedAppointments = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    const [appointments, setAppointment] = useState(store.calendarEntries);




    let mappedAppointments = appointments.map((appt, index) => {
        return (
            <li
                className="list-group-item d-flex justify-content-between"
                key={index}>
                {appt.text}
                <button type="button"
                    className="btn btn-outline-light">Paid
                </button>
            </li>
        );
    });

    function removeTask(i) {
        let filteredArray = appointments.filter((task, index) => {
            return i != index;
        });
        setAppointment(filteredArray);
    }

    return (
        <div className="container">
            <div className="mainBox">
                <div className="inputDiv">
                    <ul className="list-group">{mappedAppointments}</ul>
                </div>
            </div>
        </div>
    );
};


