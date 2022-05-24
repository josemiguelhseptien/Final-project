import React from "react";
// import useSWR from "swr";
// import { starWarsApiFetch } from "../views/planets";

export function ProfessionalCard() {
    // const { data, isValidating } = useSWR("/api/people", starWarsApiFetch);

    return (
        <div className="card-group">
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">name</h5>
                    <p className="card-text">subject</p>
                    <p className="card-text">location</p>

                </div>
                <div className="card-footer">
                    <small className="text-muted">rating</small>
                </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">name</h5>
                    <p className="card-text">subject</p>
                    <p className="card-text">location</p>

                </div>
                <div className="card-footer">
                    <small className="text-muted">Rating</small>
                </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">name</h5>
                    <p className="card-text">subject</p>
                    <p className="card-text">location</p>


                </div>
                <div className="card-footer">
                    <small className="text-muted">Rating</small>
                </div>
            </div>
        </div>
    );
}
