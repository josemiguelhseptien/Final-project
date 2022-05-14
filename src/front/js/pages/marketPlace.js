import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const MarketPlace = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container-fluid">
      MarketPlace
      <span>hello</span>
    </div>
  );
};

MarketPlace.propTypes = {
  match: PropTypes.object,
};
