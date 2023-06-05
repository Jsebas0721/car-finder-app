import React, { useState } from "react";

function UpdateCar({car, onUpdateCar}){
    
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
        .then((updatedCar) => onUpdateCar(updatedCar))
    }

    function handleChange(e){
        setCarData({
            ...carData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <form onSubmit={handleFormSubmit}>
           <input
            type="text"
            name="make"
            value={carData.make}
            onChange={handleChange}
            />
            <input
            type="number"
            name="year"
            value={carData.year}
            onChange={handleChange}
            />
            <input
            type="text"
            name="color"
            value={carData.color}
            onChange={handleChange}
            />
            <input
            type="text"
            name="image"
            value={carData.image}
            onChange={handleChange}
            />
            <input
            type="number"
            name="mileage"
            value={carData.mileage}
            onChange={handleChange}
            />
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