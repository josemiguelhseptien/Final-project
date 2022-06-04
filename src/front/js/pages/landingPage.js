import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const LandingPage = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [profileType, setProfileType] = useState("professional")

    return (
        <div className="container-fluid">
            {/* ----------------------------Header w/image---------------------------- */}
            <header>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg double ">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1">Book like a pro with Bookt.io</h1>
                            <p className="lead">Book appointments with ease, bookt.io makes booking a breeze.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <Link to={{ pathname: `/signup/` }}>
                                    <button type="button" className="btn btn-info btn-lg px-4 me-md-2 fw-bold">Get started now</button>
                                </Link>
                                {/* link to registration page */}
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src="https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1" alt="" width="720" />
                        </div>
                    </div>
                </div>
            </header>
            {/* ----------------------------About info---------------------------- */}
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center double">
                <div className="col-md-5 p-lg-5 mx-auto my-1">
                    <h1 className="display-4 fw-normal">Make Appointment Setting Easy</h1>
                    <p className="lead fw-normal">If you're tired of the constant back and forth in setting appointments, you need bookt.io.</p>
                </div>
                {/* ----------------------------Toggle provider or client---------------------------- */}
                <div>
                    <p className="lead fw-normal">Tell me more:</p>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
                    <button type="button" className="btn btn-info btn-lg active" data-bs-toggle="button" aria-pressed="true" onClick={() => setProfileType("professional")}>I'm a professional</button>
                    <button type="button" className="btn btn-outline-info btn-lg" data-bs-toggle="button" onClick={() => setProfileType("client")}>I'm a client</button>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            {/* ----------------------------Features---------------------------- */}
            {/* -------1st Feature w/ image right--------- */}
            {profileType == "professional" ? (
                <div>
                    <hr className="featurette-divider" />

                    <div className="row featurette double">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">Join the modern age. <span className="text-muted">Using paper is old school.</span></h2>
                            <p className="lead">Nobody wants to look unprofessional flipping through pages of a calendar. Or worse, missing an appointment cause you lost the scrap of paper it was written on.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/196650/pexels-photo-196650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    {/* -------2nd Feature w/ image left--------- */}
                    <div className="row featurette double">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-normal lh-1">Track what's important. <span className="text-muted">Your time & money.</span></h2>
                            <p className="lead">And of course your clients. You can even rate them to keep track.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img className="featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/4386235/pexels-photo-4386235.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"></img>

                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    {/* -------3rd Feature w/ image right--------- */}
                    <div className="row featurette double">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">And lastly, get more $. <span className="text-muted">Join the marketplace.</span></h2>
                            <p className="lead">Let clients easily find & book appointments with you.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                </div>
            ) : (
                <div>
                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">Easy as 1, 2, 3. <span className="text-muted">It’ll blow your mind.</span></h2>
                            <p className="lead">Register for an account, find a professional and contact them to book your appointment. It really is that simple.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/367273/pexels-photo-367273.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    {/* -------2nd Feature w/ image left--------- */}
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-normal lh-1">Track your appointments. <span className="text-muted">And never forget to pay again.</span></h2>
                            <p className="lead">In your dashboard you can see your appointments. And easily see if you've paid for it.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img className="featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/6694866/pexels-photo-6694866.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    {/* -------3rd Feature w/ image right--------- */}
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">And lastly, bookt more. <span className="text-muted">Check out the marketplace.</span></h2>
                            <p className="lead">Search for more professionals by name, location or area of specialty.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/8197544/pexels-photo-8197544.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1"></img>
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                </div>
            )}
            {/* ----------------------------Call to action---------------------------- */}
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center double">
                <div className="col-md-5 p-lg-5 mx-auto my-3">
                    <h1 className="display-4 fw-normal">Ready to get started?</h1>
                    <p className="lead fw-normal">Register an account with Bookt today. Who knows, you could be bookt up very soon.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to={{ pathname: `/signup/` }}>
                            <button type="button" className="btn btn-info btn-lg px-4 me-md-2 fw-bold">Get started now</button>
                        </Link>
                        {/* link to registration page */}
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>
    );
};

LandingPage.propTypes = {
    match: PropTypes.object
};