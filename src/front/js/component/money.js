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

    const [totals, setTotals] = useState(store.calendarEntries);
    useEffect(() => { }, []);

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
            </div>
            <div className="d-flex justify-content-between mb-2 py-3 rounded goldGlow">
                <form className="d-inline-flex">
                    <div className="mb-1 mx-1">
                        <label className="form-label">Start Month:</label>
                        <div className="input-group mb-1">
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
                    <div className="mb-1 mx-2">
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
                        className="btn buttonColor3 m-2"
                        onClick={(e) => {
                            setTotals(actions.displayTotalScheduled(dates));
                        }}
                    >
                        Filter
                    </button>
                </form>
            </div>
            {/* Boxes to display money overview */}
            <div className="d-flex justify-content-between my-3 py-3 rounded goldGlow">
                <div className="mx-2">
                    <h4>Total Scheduled</h4>
                    <div>
                        <div className="text-center">{totals.length}</div>
                    </div>
                </div>
                <div className="mx-2">
                    <h4>Total Earned</h4>
                    <div>
                        <div className="text-center">
                            {earnedMoney}
                        </div>
                    </div>
                </div>
                <div className="mx-2">
                    <h4>Total Paid</h4>
                    <div>
                        <div className="text-center">
                            {paidMoney}
                        </div>
                    </div>
                </div>
                <div className="mx-2">
                    <h4>Total Owed</h4>
                    <div>
                        <div className="text-center">
                            {owedMoney}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
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
