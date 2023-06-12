import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DealersContext } from "../context/dealers";
import { CarsContext } from "../context/cars";

function Dealer( { dealer } ){

    const {id,name, logo, location, cars} = dealer;

    const {setCurrentDealer} = useContext(DealersContext)
    const {setCars}= useContext(CarsContext);

    function handleClick(){ 
        setCurrentDealer(dealer)
        setCars(cars)
    }
    
    return (
        <NavLink
        exact to={`/dealers/${id}/cars`}
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