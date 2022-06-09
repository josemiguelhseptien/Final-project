import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Stats = (props) => {
  const { store, actions } = useContext(Context);
  const [dates, setDates] = useState({
    startDate: 0,
    endDate: 0,
    startMonth: 0,
    endMonth: 0,
  });

  const [totals, setTotals] = useState(store.calendarEntries);
  useEffect(() => { }, []);

  const [chartImg, setChartImg] = useState("")
  useEffect(() => setChartImg(actions.displayChart("statsDataSet")), []);


  return (
    <div className="container-fluid my-2">
      {/* Form to enter Stats info */}
      <div>
        <h3>Filter By Dates:</h3>
      </div>
      <div className="d-flex justify-content-between mb-2 py-3 rounded goldGlow">
        <form className="d-inline-flex">
          <div className="mb-2 mx-2">
            <label className="form-label">Start Month:</label>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                value={dates.startMonth}
                onChange={(e) => {
                  setDates({ ...dates, startMonth: e.target.value });
                }}
              />
            </div>
          </div>
          <div>
            <label className="form-label">Start Day:</label>
            <input
              type="number"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={dates.startDate}
              onChange={(e) => {
                setDates({ ...dates, startDate: e.target.value });
              }}
            />
          </div>
          <div className="mb-2 mx-2">
            <label className="form-label">End Month:</label>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                value={dates.endMonth}
                onChange={(e) => {
                  setDates({ ...dates, endMonth: e.target.value });
                }}
              />
            </div>
          </div>
          <div>
            <label className="form-label">End Day:</label>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                value={dates.endDate}
                onChange={(e) => {
                  setDates({ ...dates, endDate: e.target.value });
                }}
              />
            </div>
          </div>
          <button
            type="text"
            className="btn buttonColor3 m-3"
            onClick={(e) => {
              setTotals(actions.displayTotalScheduled(dates));
            }}
          >
            Filter
          </button>
        </form>
      </div>
      {/* Boxes to display Stats overview */}
      <div className="d-flex justify-content-between my-3 py-3 rounded goldGlow">
        <div className="mx-2">
          <h4>Total Scheduled</h4>
          <div className="">
            <div className="text-center">{totals.length}</div>
          </div>
        </div>
        <div className="mx-2">
          <h4>Total Completed</h4>
          <div className="">
            <div className="text-center">
              {totals.filter((elm) => elm.completed).length}
            </div>
          </div>
        </div>
        <div className="mx-2">
          <h4>Total Paid</h4>
          <div className="">
            <div className="text-center">
              {totals.filter((elm) => elm.paid).length}
            </div>
          </div>
        </div>
        <div className="mx-2">
          <h4>Total Canceled</h4>
          <div className="">
            <div className="text-center">
              {totals.filter((elm) => elm.cancelled).length}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3>Appointment Chart</h3>
      </div>
      <div>
        {store.chartURL ? (
          <img src={store.chartURL} alt="June appt stats" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Stats.propTypes = {
  match: PropTypes.object,
};
