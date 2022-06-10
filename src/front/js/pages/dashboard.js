import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "./../component/calendar";
import { Money } from "./../component/money";
import { Stats } from "./../component/stats";
import { ViewClients } from "./../component/viewClients";
import { CompletedAppointments } from "../component/completedAppointments";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const [viewType, setViewType] = useState("appointments");

  return (
    <div className="container-fluid">
      <br></br>
      {actions.modifyAppt()}
      <div className="d-flex double">
        <div className="d-inline-flex justify-content-center">
          <div className="card card-body justify-content-center" style={{ width: "150px", minHeight: "80vh" }}>
            <ul className="nav flex-column">
              <li className="nav-item my-3 py-3">
                <span onClick={() => setViewType("appointments")}>
                  <i className="far fa-calendar-check fa-4x"></i>
                  <h5>Appointments</h5>
                </span>
              </li>
              <li className="nav-item my-3 py-3">
                <span onClick={() => setViewType("calendar")}>
                  <i className="far fa-calendar-alt fa-4x"></i>
                  <h5>Calendar</h5>
                </span>
              </li>
              <li className="nav-item my-3 py-3">
                <span onClick={() => setViewType("money")}>
                  <i className="far fa-money-bill-alt fa-3x"></i>
                  <h5>Money</h5>
                </span>
              </li>
              <li className="nav-item my-3 py-3">
                <span onClick={() => setViewType("stats")}>
                  <i className="fas fa-chart-line fa-3x"></i>
                  <h5>Stats</h5>
                </span>
              </li>
              <li className="nav-item my-3 py-3">
                <span onClick={() => setViewType("clients")}>
                  <i className="far fa-user fa-4x"></i>
                  <h5>Clients</h5>
                </span>
              </li>

            </ul>
          </div>
        </div>
        {viewType == "calendar" ? (
          <div className="d-inline-block mx-5">
            <div>
              <h3 className="mt-3 mb-4">Calendar</h3>
            </div>
            <div>
              {< Calendar />}
            </div>
          </div>
        ) : (null)}
        <div id="rightSection">
          {viewType == "money" ? (
            <div className="d-inline-block mx-5">
              <div>
                <h3 className="mt-3 mb-4">Your Money</h3>
              </div>
              <div>{<Money />}</div>
            </div>
          ) : null}
          {viewType == "stats" ? (
            <div className="d-inline-block mx-5">
              <div>
                <h3 className="mt-3 mb-4">Appointment Stats</h3>
                <div>{<Stats />}</div>
              </div>
            </div>
          ) : null}
        </div>
        {viewType == "clients" ? (
          <div className="d-inline-block mx-5">
            {< ViewClients />}
          </div>
        ) : (null)}
        {viewType == "appointments" ? (
          <div className="d-inline-block mx-5">
            <h3 className="mt-3 mb-4">Appointments</h3>
            <div>{<CompletedAppointments />}</div>
          </div>
        ) : null}
      </div>
    </div>
  )
};
Dashboard.propTypes = {
  match: PropTypes.object,
}
