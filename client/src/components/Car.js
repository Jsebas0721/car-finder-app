import React from "react";

function Car({car}){

    const {make, color, year, image, mileage, price} = car
    return (
        <ul>
            <div className="car-card">
                <img 
                alt="car" 
                src={image}
                className="car-image"
                />
                <h3>{make}</h3>
                <p>Price: {color}</p>
            </div>
        </ul>
    )
}

export default Car;