import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "./../component/calendar";

export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [profileType, setProfileType] = useState("client");
  const [viewType, setViewType] = useState("glance");

  return (
    <div className="container-fluid">
      {profileType == "professional" ? (
        <div>
          <p>
            <button
              className="btn btn-secondary-outline mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Menu
            </button>
          </p>
          <div className="d-inline-flex">
            <div
              className="collapse collapse-horizontal"
              id="collapseWidthExample"
            >
              <div
                className="card card-body justify-content-center"
                style={{ width: "50px", minHeight: "80vh" }}
              >
                <ul className="nav flex-column">
                  <li className="nav-item py-3">
                    <span onClick={() => setViewType("glance")}>Glance</span>
                  </li>
                  <li className="nav-item py-3">
                    <span onClick={() => setViewType("calendar")}>
                      Calendar
                    </span>
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
          {viewType == "glance" ? (
            <div className="d-inline-block mx-5">
              <div>
                <h3>Upcoming Apointments</h3>
                <div>Card Row</div>
              </div>
              <div>
                <h3>Confirm Appointments</h3>
                <div>Card Row</div>
              </div>
              <div>
                <h3>Payment Confirmation</h3>
                <div>Card Row</div>
              </div>
              <div>
                <h3>Prospective Clients</h3>
                <div>Card Row</div>
              </div>
            </div>
          ) : null}
          {viewType == "calendar" ? (
            <div className="d-inline-block mx-5">
              <div>
                <h3>Color Key</h3>
                <p>Requested, Confirmed, Owed, Paid</p>
              </div>
              <div>Calendar</div>
            </div>
          ) : null}
          {viewType == "money" ? (
            <div className="d-inline-block mx-5">
              <div>
                <h3>Sessions Paid</h3>
                <div>box</div>
              </div>
              <div>
                <h3>Sessions Owed</h3>
                <div>box</div>
              </div>
              <div>
                <h3>Income Chart</h3>
                <div>Week, Month, Year</div>
              </div>
            </div>
          ) : null}
          {viewType == "graph" ? (
            <div className="d-inline-block mx-5">
              <div>
                <h3>Bookt Chart</h3>
                <div>graph: #booked/mo, attended, canceled</div>
              </div>
              <div>
                <h3>Earned Owed Chart</h3>
                <div>graph: #potential/mo, paid, owed</div>
              </div>
            </div>
          ) : null}
          {viewType == "clients" ? (
            <div className="d-inline-block mx-5">
              <div>
                <h3>Fidn Client</h3>
                <div>Search box</div>
              </div>
              <div>
                <h3>Clients</h3>
                <div>Card Row</div>
              </div>
            </div>
          ) : null}
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
      <Calendar />
    </div>
  );
};

Dashboard.propTypes = {
  match: PropTypes.object,
};
