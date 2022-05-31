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


    // function mapAccountUser() {
    //     let mappedArr = store.accountUser.map((accountUser, index) => {
    //         let componentCard = (<MarketPlaceCard key={index} user={accountUser} />)
    //         if (accountUser.userType == "professional") return componentCard
    //     })
    //     return mappedArr
    // }

    // function mapFilteredUsers() {
    //     let mappedArr = store.filteredUsers.map((accountUser, index) => {
    //         let componentCard = (<MarketPlaceCard key={index} user={accountUser} />)
    //         if (accountUser.userType == "professional") return componentCard
    //     })
    //     return mappedArr
    // }


    return (
        <div className="container-fluid">
            <div>
                <br></br>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1"
                            value={store.nameInput} onChange={(e) => { actions.typeNameFunction(e.target.value) }} />
                    </div>
                    <button type="button" className="btn btn-light" onClick={(e) => { actions.clearSearch() }}><i className="fas fa-sync-alt"></i></button>
                </div>
            </div>
            <br></br>
            {/* <div>
                <div>
                    {store.filteredUsers.length == 0 ? mapAccountUser() : mapFilteredUsers()}
                </div>
            </div> */}
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