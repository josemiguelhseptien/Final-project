import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CompletedAppointments = () => {
  const { store, actions } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  let appointments = store.calendarEntries.filter(
    (elm) => !(elm.paid || elm.cancelled)
  );
  let paidAppointments = store.calendarEntries.filter((elm) => elm.paid);
  let cancelledCalendarEntries = store.calendarEntries.filter(
    (elm) => elm.cancelled
  );

  function paidAppointmentFunction(appt, index) {
    paidAppointments.push(appt);
  }
  function cancelAppointmentFunction(appt, index) {
    cancelledCalendarEntries.push(appt);
  }

  let mappedAppointments = appointments.map((appt, index) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between"
        key={index}
      >
        <div>
          <div>{appt.text} </div>
          <div>{appt.description} </div>
          <div>Start time : {appt.startDate.toString()}</div>
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
                  actions.addUserIncome({
                    userID: 1,
                    paidFor: appt.text,
                    dateEntered: new Date(),
                    earned: 100,
                    paid: 100,
                    owed: 0,
                  });
                  actions.editCalendarEntry(appt.text, "paid");
                  actions.editUserStats(appt.startDate, "completed");
                }}
              >
                Pay
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-outline-warning mx-1"
                onClick={(e) => {
                  actions.editCalendarEntry(appt.text, "completed");
                }}
              >
                Complete
              </button>
              <button
                type="button"
                className="btn btn-outline-danger mx-1"
                onClick={(e) => {
                  actions.editCalendarEntry(appt.text, "cancelled");
                }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </li>
    );
  });

  let mappedPaidAppointments = paidAppointments.map((appt, index) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between"
        key={index}
      >
        <div>
          <div>{appt.text} </div>
          <div>{appt.description} </div>
          <div>Start time : {appt.startDate.toString()}</div>
        </div>
        <div>
          <button type="button" className="btn btn-success" disabled>
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
          className="list-group-item d-flex justify-content-between"
          key={index}
        >
          <div>
            <div>{appt.text} </div>
            <div>{appt.description} </div>
            <div>Start time : {appt.startDate.toString()}</div>
          </div>
          <div>
            <button type="button" className="btn btn-danger" disabled>
              Cancelled
            </button>
          </div>
        </li>
      );
    }
  );

  let appointmentsPendingConfirmation = (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <div>Marco Polo </div>
        <div>Math tutoring </div>
        <div>Start time : saturday April 22nd at 2:00pm</div>
      </div>
      <div>
        <button type="button" className="btn btn-secondary">
          Resolved
        </button>
      </div>
    </li>
  );

  function removeAppt(appt, index) {
    let filteredArray = appointments.filter((appt, i) => {
      return i != index;
    });
    setAppointment(filteredArray);
  }

  console.log(store.calendarEntries);

  return (
    <div className="container-fluid">
      <br></br>
      <div className="mainBox">
        <div className="inputDiv">
          <div>
            <h3>Pending confirmation</h3>
          </div>
          <ul className="list-group">
            {mappedAppointments.length == 0 ? (
              <div className="list-group-item">
                <span>There are no pending appointments</span>
              </div>
            ) : (
              appointmentsPendingConfirmation
            )}
          </ul>
        </div>
        <br></br>
        <div className="inputDiv">
          <div>
            <h3>Scheduled appointments</h3>
          </div>
          <ul className="list-group">
            {mappedAppointments.length == 0 ? (
              <div className="list-group-item">
                <span>There are no pending appointments</span>
              </div>
            ) : (
              mappedAppointments
            )}
          </ul>
        </div>
        <br></br>
        <div className="inputDiv">
          <div>
            <h3>Paid appointments</h3>
          </div>
          <ul className="list-group">{mappedPaidAppointments}</ul>
        </div>
        <br></br>
        <div className="inputDiv">
          <div>
            <h3>Cancelled appointments</h3>
          </div>
          <ul className="list-group">{mappedCancelledAppointments}</ul>
        </div>
      </div>
    </div>
  );
};