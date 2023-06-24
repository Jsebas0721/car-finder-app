import React, { useState,useContext } from "react";
import { DealersContext } from "../context/dealers";
import { CarsContext } from "../context/cars";


function NewCar() {

    const [errors, setErrors]= useState([]);
    const [carData, setCarData] = useState({
        make: "",
        year: "",
        color: "",
        image: "",
        mileage: "",
        price: ""
    })

    const {currentDealer} =useContext(DealersContext);
    const {handleAddNewCar} = useContext(CarsContext)


    function handleSubmit(e){
        e.preventDefault();
        fetch("/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...carData,
                dealer_id: currentDealer.id
            })
        }).then((resp) => {
            if(resp.ok) {
                resp.json().then((newCar) => {
                console.log(newCar)
                handleAddNewCar(newCar)
                setCarData({
                    make: "",
                    year: "",
                    color: "",
                    image: "",
                    mileage: "",
                    price: ""
                });
                
            });
            }else{
               resp.json().then((errorData) => setErrors(errorData.errors)); 
            }
        });
    }

    function handleChange(e){
        setCarData({
            ...carData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="new-car-form" onSubmit={handleSubmit}>
            <h2>NEW CAR FORM:</h2>
            <label>Make: </label>
            <input
            type="text"
            name="make"
            placeholder="Enter Make/Model Name.."
            value={carData.make}
            onChange={handleChange}
            />
            <label>Year: </label>
            <input
            type="number"
            name="year"
            placeholder="Enter Year.."
            value={carData.year}
            onChange={handleChange}
            />
            <label>Color: </label>
            <input
            type="text"
            name="color"
            placeholder="Enter Color.."
            value={carData.color}
            onChange={handleChange}
            />
            <label>Image: </label>
            <input
            type="text"
            name="image"
            placeholder="Enter Image URL.."
            value={carData.image}
            onChange={handleChange}
            />
            <label>Mileage: </label>
            <input
            type="number"
            name="mileage"
            placeholder="Enter Mileage.."
            value={carData.mileage}
            onChange={handleChange}
            />
            <label>Price: </label>
            <input
            type="number"
            name="price"
            placeholder="Enter Price.."
            value={carData.price}
            onChange={handleChange}
            /><br/>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            <button type="Submit">Add Car</button>
        </form>
    )
}

export default NewCar;