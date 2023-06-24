import React, { useContext } from "react";
import Car from "./Car";

import { CarsContext } from "../context/cars";
import { UserContext } from "../context/user";



function CarList(){

    const {cars} = useContext(CarsContext);
    const {user} = useContext(UserContext);


    return(
        <ul className="car-container">
            <hr/>
            <h1>CARS FOR SALE:</h1>
            {/* {carsList} */}
            {user && cars.length !== 0 ? cars.map((car)=> (
                <Car key={car.id} car={car} />
            )) :
            <p>Currently, There are not Cars listed for this Dealer.</p>}
        </ul>
    )
}

export default CarList;