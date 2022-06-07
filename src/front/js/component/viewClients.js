import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ClientCard } from "./../component/clientCard";
import { ProspectCard } from "./../component/prospectCard";


export const ViewClients = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const prospective = (() => {
        let mappedProspect = store.accountUser[0].prospect.map((prospect, index) => {
            return (<ProspectCard key={index} user={prospect} />)
        })
        return mappedProspect
    })

    const clients = (() => {
        let mappedClient = store.accountUser[0].client.map((client, index) => {
            return (<ClientCard key={index} user={client} />)
        })
        return mappedClient
    })

    return (
        <div className="container-fluid">
            <br></br>
            <div>
                <h3>Prospective Clients</h3>
                <div className="cardRow mb-5">
                    {prospective()}
                </div>
            </div>
            <div>
                <h3>Clients</h3>
                <div className="cardRow mb-5">
                    {clients()}
                </div>
            </div>

        </div>
    );
};

ViewClients.propTypes = {
    match: PropTypes.object,
};