import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const RatingStar = () => {
    const { store, actions } = useContext(Context);

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        // <div className="star-rating">
        //     {[...Array(5)].map((star, index) => {
        //         index += 1;
        //         return (
        //             <button
        //                 type="button"
        //                 key={index}
        //                 className={index <= (hover || rating) ? "on" : "off"}
        //                 onClick={() => setRating(index)}
        //                 onMouseEnter={() => setHover(index)}
        //                 onMouseLeave={() => setHover(rating)}
        //             >
        //                 <span className="star">&#9733;</span>
        //             </button>
        //         );
        //     })}
        // </div>
        <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </div>

    );
};

RatingStar.propTypes = {
    match: PropTypes.object,
};
