import React from "react";
import Car from "./Car";

function CarList({cars, onUpdateCar}){

    const carsList = cars.map((car)=> (
        <Car key={car.id} car={car} onUpdateCar={onUpdateCar}/>
    )) 
    return(
        <ul className="car-container">
            <hr/>
            <h1>Cars For Sale:</h1>
            {carsList}
        </ul>
    )
}

export default CarList;