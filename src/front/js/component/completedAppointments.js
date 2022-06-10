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
          <div><h5>{appt.text}</h5> </div>
          <div><p>{appt.description}</p> </div>
          <div><p>Start time : {appt.startDate.toString()}</p></div>
        </div>
        <div>
          {appt.completed ? (
            <>
              <button
                type="button"
                className="btn buttonColor mx-1"
                onClick={(e) => {
                  actions.editCalendarEntry(appt.text, "completed");
                }}
                disabled
              >
                Completed
              </button>
              <button
                type="button"
                className="btn buttonColor3 mx-1"
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
                className="btn buttonColor2 mx-1"
                onClick={(e) => {
                  actions.editCalendarEntry(appt.text, "completed");
                }}
              >
                Complete
              </button>
              <button
                type="button"
                className="btn deleteColor mx-1"
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
          className="list-group-item d-flex justify-content-between"
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
      <br></br>
      <div className="mainBox">
        <br></br>
        <div className="inputDiv mb-1">
          <div>
            <h3>Scheduled appointments</h3>
          </div>
          <ul className="list-group">
            {mappedAppointments.length == 0 ? (
              <div className="list-group-item">
                <span><h5>There are no pending appointments</h5></span>
              </div>
            ) : (
              mappedAppointments
            )}
          </ul>
        </div>
        <br></br>
        <div className="inputDiv mt-3">
          <div>
            <h3>Paid appointments</h3>
          </div>
          <ul className="list-group">{mappedPaidAppointments}</ul>
        </div>
        <br></br>
        <div className="inputDiv mt-3">
          <div>
            <h3>Cancelled appointments</h3>
          </div>
          <ul className="list-group">{mappedCancelledAppointments}</ul>
        </div>
      </div>
    </div>
  );
};