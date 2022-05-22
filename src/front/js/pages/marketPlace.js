import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
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

  console.log(marketPlaceInput.services)

  return (
    <div className="container-fluid">
      <br></br>
      <div className="d-flex justify-content-between">
        <div className="d-flex">




          <input type="text" className="form-control" placeholder="service" aria-label="service" aria-describedby="basic-addon1"
            value={marketPlaceInput.services} onChange={(e) => { setMarketPlaceInput({ ...marketPlaceInput, services: e.target.value }) }} />




        </div>
        <div className="d-flex">
          <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1" />
        </div>
        <div className="d-flex">
          <input type="text" className="form-control" placeholder="price" aria-label="price" aria-describedby="basic-addon1" />
        </div>
        <div className="d-flex">
          <input type="text" className="form-control" placeholder="rating" aria-label="rating" aria-describedby="basic-addon1" />
        </div>
        <div className="d-flex">
          <input type="text" className="form-control" placeholder="zip code" aria-label="zip code" aria-describedby="basic-addon1" />
        </div>
        <button type="button" className="btn btn-light"><i className="fas fa-sync-alt"></i></button>
      </div>
      <br></br>
      <div className="list-group">
        <div>
          {store.accountUser.map((accountUser, index) => {
            let componentCard = (<MarketPlaceCard key={index} user={accountUser} />)
            if (accountUser.userType == "professional") return componentCard
          })}
        </div>
      </div>
    </div>
  );
};

MarketPlace.propTypes = {
  match: PropTypes.object,
};
