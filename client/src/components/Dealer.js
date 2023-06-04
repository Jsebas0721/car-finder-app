import React from "react";
import { NavLink } from "react-router-dom";

function Dealer( { dealer, onSetCars, onSetCurrentDealer} ){

    const {name, logo, location, cars} = dealer;

    function handleClick(){
        onSetCurrentDealer(dealer)
        onSetCars(cars)
    }
    return (
        <NavLink
        exact to={`/${name}/cars`}
        onClick={handleClick}
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