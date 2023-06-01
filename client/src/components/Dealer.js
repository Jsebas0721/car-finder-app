import React from "react";
import { NavLink } from "react-router-dom";

function Dealer( { dealer } ){

    const {name, logo, location} = dealer;

    console.log(logo);
    return (
        <NavLink
        exact to={`/${name}/cars`}
        >
            <div className="dealer-card">
                <img 
                alt="Company logo" 
                src={logo}
                className="dealer-logo"
                />
                <h3>{name}</h3>
                <p>Location: {location}</p>
            </div>
        </NavLink>
    )
}

export default Dealer;