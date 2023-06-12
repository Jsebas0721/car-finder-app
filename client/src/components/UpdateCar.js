import React, { useContext, useState } from "react";
import { CarsContext } from "../context/cars";

function UpdateCar({car, setIsUpdating}){
    
    const {id, make, year, color, image, mileage, price} = car

    const [carData, setCarData] = useState({
        id: id,
        make: make,
        year: year,
        color: color,
        image: image,
        mileage: mileage,
        price: price
    })

    const {handleUpdateCar}= useContext(CarsContext);

    function handleFormSubmit(e){
        e.preventDefault();
        fetch(`/cars/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(carData),
        })
        .then((resp) => resp.json())
        .then((updatedCar) => {
            setIsUpdating(false);
            handleUpdateCar(updatedCar);
        })
    }

    function handleChange(e){
        setCarData({
            ...carData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className="update-car-form" onSubmit={handleFormSubmit}>
           <label>Make: </label>
           <input
            label="make:"
            type="text"
            name="make"
            value={carData.make}
            onChange={handleChange}
            />
            <label>Year: </label>
            <input
            type="number"
            name="year"
            value={carData.year}
            onChange={handleChange}
            />
            <label>Color: </label>
            <input
            type="text"
            name="color"
            value={carData.color}
            onChange={handleChange}
            />
            <label>Image: </label>
            <input
            type="text"
            name="image"
            value={carData.image}
            onChange={handleChange}
            />
            <label>MIleage: </label>
            <input
            type="number"
            name="mileage"
            value={carData.mileage}
            onChange={handleChange}
            />
            <label>Price: </label>
            <input
            type="number"
            name="price"
            value={carData.price}
            onChange={handleChange}
            />
            <input type="submit" value="Save" />
        </form>
    )
}

export default UpdateCar;