import React from "react";
import Car from "./Car";

function CarList({cars}){

    const carsList = cars.map((car)=> (
        <Car key={car.id} car={car}/>
    )) 
    return(
        <ul className="car-container">
            <h1>CarList</h1>
            {carsList}
        </ul>
    )
}

export default CarList;