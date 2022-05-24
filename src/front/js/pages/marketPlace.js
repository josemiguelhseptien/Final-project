import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { RatingStar } from "../component/ratingStar";
import { ProfessionalCard } from "../component/ProfessionalCard";
import { SearchBar } from "../component/searchBar";




export const MarketPlace = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container-fluid">
      <div>
        <SearchBar />
      </div>

      <div className="float-start">
        <div className="input-group flex-nowrap">
          <input type="text" className="form-control" placeholder="Search zip" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
      </div><br></br>
      <div>
        <ProfessionalCard />
      </div>
    </div>
  );
};

MarketPlace.propTypes = {
  match: PropTypes.object,
};
