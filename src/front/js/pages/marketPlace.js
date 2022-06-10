import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RatingStar } from "../component/ratingStar";
import "../../styles/home.css";
import "../../styles/index.css";


import { MarketPlaceCard } from "../component/marketPlaceCard";


export const MarketPlace = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [user, setUser] = useState(props.location.state)
  const [results, setResults] = useState(store.accountUser);
  const [searchTerm, setSearchTerm] = useState("");


  function mapAccountUser() {
    let mappedArr = results.map((accountUser, index) => {
      let componentCard = (<MarketPlaceCard key={index} user={accountUser} />)
      if (accountUser.userType == "professional") return componentCard
    })
    return mappedArr
  }

  function mapFilteredUsers() {
    let mappedArr = results.map((accountUser, index) => {
      let componentCard = (<MarketPlaceCard key={index} user={accountUser} />)
      if (accountUser.userType == "professional") return componentCard
    })
    return mappedArr
  }

  const search = () => {

    let filterTargetValue = results.filter((element) => {
      console.log(element.zip_code.includes(searchTerm));
      return (element.services.toLowerCase().includes(searchTerm) || element.name.toLowerCase().includes(searchTerm) || element.zip_code.includes(searchTerm) || element.prices <= searchTerm);
    })
    setResults(filterTargetValue);
  }


  return (
    <div className="container-fluid ">
      <div>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-between ">
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="service"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.keyCode == 13) search();
              }} />
          </div>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="name"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.keyCode == 13) search();
              }} />
          </div>
          <div className="d-flex">
            <input type="number" className="form-control" placeholder="price" aria-label="price" aria-describedby="basic-addon1"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.keyCode == 13) search();
              }} />
          </div>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="rating" aria-label="rating" aria-describedby="basic-addon1" />
          </div>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="zip code" aria-label="zip code" aria-describedby="basic-addon1"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.keyCode == 13) search();
              }} />
            <button className="btn btn-light" onClick={(e) => { setSearchTerm(""), setResults(store.accountUser) }}><i className="fas fa-sync-alt"></i></button>
          </div>

          <br></br>
          {/* <button type="button" className="btn btn-light" onClick={(e) => { actions.clearSearch() }}><i className="fas fa-sync-alt"></i></button> */}
        </div>



      </div>
      <br></br>
      <br></br>
      <div className="list-group">
        <div>
          {results.length == 0 ? mapAccountUser() : mapFilteredUsers()}
        </div>
      </div>

    </div>
  );
};

MarketPlace.propTypes = {
  match: PropTypes.object,
};
