import React from "react";

function Dealer( { dealer } ){

    const {name, logo, location} = dealer;

    console.log(logo);
    return (
        <div className="dealer-card">
            <img lt="Company logo" src={`${logo}`}/>
            <h3>{name}</h3>
            <p>Location: {location}</p>
        </div>
    )
}

export default Dealer;