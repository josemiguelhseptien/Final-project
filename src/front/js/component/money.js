import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Money = (props) => {
    const { store, actions } = useContext(Context);


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
    useEffect(() => setChartImg(actions.displayMoneyChart()), []);


    return (
        <div className="container-fluid">
            {/* Form to enter money info */}
            <div>
                <form className="d-inline-flex">
                    <div className="mb-3 mx-2">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" id="dateEntered"
                            onChange={e => { setMoneyEntry({ ...moneyEntry, dateEntered: e.target.value }); }}
                        />
                    </div>
                    <div>
                        <label className="form-label">Earned</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
                                value={moneyEntry.earned}
                                onChange={e => { setMoneyEntry({ ...moneyEntry, earned: e.target.value }); }}
                            />
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <div>
                        <label className="form-label">Paid</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
                                value={moneyEntry.paid}
                                onChange={e => { setMoneyEntry({ ...moneyEntry, paid: e.target.value }); }}
                            />
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <div>
                        <label className="form-label">Owed</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
                                value={moneyEntry.owed}
                                onChange={e => { setMoneyEntry({ ...moneyEntry, owed: e.target.value }); }}
                            />
                            <span className="input-group-text">.00</span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={(e) => {
                            actions.addUserIncome(moneyEntry), setEarnedMoney(actions.displayTotalEarned()),
                                setOwedMoney(actions.displayTotalOwed()), setPaidMoney(actions.displayTotalPaid())
                        }}
                    >Submit</button>
                </form>
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
