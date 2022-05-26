import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RatingStar } from "../component/ratingStar";
import { ProfessionalCard } from "../component/ProfessionalCard";
import { SearchBar } from "../component/searchBar";


import { MarketPlaceCard } from "../component/marketPlaceCard";


export const MarketPlace = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [user, setUser] = useState(props.location.state)

  const [marketPlaceInput, setMarketPlaceInput] = useState({
    services: "",
    name: "",
    price: "",
    rating: "",
    zip_code: "",
  })



  function mapAccountUser() {
    let mappedArr = store.accountUser.map((accountUser, index) => {
      let componentCard = (<MarketPlaceCard key={index} user={accountUser} />)
      if (accountUser.userType == "professional") return componentCard
    })
    return mappedArr
  }

  function mapFilteredUsers() {
    let mappedArr = store.filteredUsers.map((accountUser, index) => {
      let componentCard = (<MarketPlaceCard key={index} user={accountUser} />)
      if (accountUser.userType == "professional") return componentCard
    })
    return mappedArr
  }


  return (
    <div className="container-fluid">
      <div>
        <br></br>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="service" aria-label="service" aria-describedby="basic-addon1"
              value={store.serviceInput} onChange={(e) => { actions.typeFunction(e.target.value) }} />
          </div>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1"
              value={store.nameInput} onChange={(e) => { actions.typeNameFunction(e.target.value) }} />
          </div>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="basic-addon1"
              value={store.priceInput} onChange={(e) => { actions.typePriceFunction(e.target.value) }} />
          </div>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="rating" aria-label="rating" aria-describedby="basic-addon1" />
          </div>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="zip code" aria-label="zip code" aria-describedby="basic-addon1"
              value={store.zip_codeInput} onChange={(e) => { actions.typeZipCodeFunction(e.target.value) }} />
          </div>
          <button type="button" className="btn btn-light" onClick={(e) => { actions.clearSearch() }}><i className="fas fa-sync-alt"></i></button>
        </div>
        <br></br>
        <div className="list-group">
          <div>
            {store.filteredUsers.length == 0 ? mapAccountUser() : mapFilteredUsers()}
          </div>
        </div>
      </div>
    </div>
  );
};

MarketPlace.propTypes = {
  match: PropTypes.object,
};
