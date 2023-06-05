import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DealersContext } from "../context/dealers";

function Dealer( { dealer, onSetCars} ){

    const {name, logo, location, cars} = dealer;

    const {setCurrentDealer} = useContext(DealersContext)

    
    function handleClick(){
       
        setCurrentDealer(dealer)
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