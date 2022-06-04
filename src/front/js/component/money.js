import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Money = (props) => {
    const { store, actions } = useContext(Context);
    const [dates, setDates] = useState({
        startDate: 0,
        endDate: 0,
        startMonth: 0,
        endMonth: 0,
    });

    const [moneyEntry, setMoneyEntry] = useState({
        userID: store.accountUser.id,
        dateEntered: "",
        earned: "",
        paid: "",
        owed: "",
    })

    const [earnedMoney, setEarnedMoney] = useState(0)
    useEffect(() => setEarnedMoney(actions.displayTotalEarned()), []);

    const [owedMoney, setOwedMoney] = useState(0)
    useEffect(() => setOwedMoney(actions.displayTotalOwed()), []);

    const [paidMoney, setPaidMoney] = useState(0)
    useEffect(() => setPaidMoney(actions.displayTotalPaid()), []);

    const [chartImg, setChartImg] = useState("")
    useEffect(() => setChartImg(actions.displayChart("moneyDataSet")), []);


    return (
        <div className="container-fluid">
            {/* Form to enter money info */}
            <div>
                <h3>Filter By Dates:</h3>
                <form className="d-inline-flex">
                    <div className="mb-3 mx-2">
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
                    <div>
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
                    <div>
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
                </form>
                <button
                    type="text"
                    className="btn btn-primary"
                    onClick={(e) => {
                        setTotals(actions.displayTotalScheduled(dates));
                    }}
                >
                    Filter
                </button>
            </div>
            {/* Boxes to display money overview */}
            <div className="d-inline-flex">
                <div className="col-4 mx-5">
                    <h3>Total Earned</h3>
                    <div className="card">
                        <div className="card-body">
                            {earnedMoney}
                        </div>
                    </div>
                </div>
                <div className="col-4 mx-5">
                    <h3>Total Paid</h3>
                    <div className="card">
                        <div className="card-body">
                            {paidMoney}
                        </div>
                    </div>
                </div>
                <div className="col-4 mx-5">
                    <h3>Total Owed</h3>
                    <div className="card">
                        <div className="card-body">
                            {owedMoney}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Income Chart</h3>
            </div>
            <div>
                {store.chartURL ? <img src={store.chartURL} alt="June money data" /> : ""}
            </div>
        </div>
    );
};

Money.propTypes = {
    match: PropTypes.object,
};
