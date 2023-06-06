import React, { useState,useContext } from "react";
import { DealersContext } from "../context/dealers";
import { UserContext } from "../context/user";


function NewCar({onAddNewCar}) {

    const [errors, setErrors]= useState([]);
    const [carData, setCarData] = useState({
        make: "",
        year: "",
        color: "",
        image: "",
        mileage: "",
        price: ""
    })

    const{user} = useContext(UserContext)
    console.log(user)
    const {currentDealer} =useContext(DealersContext);

    function handleSubmit(e){
        e.preventDefault();
        fetch("/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...carData,
                user_id: user.id,
                dealer_id: currentDealer.id
            })
        }).then((resp) => {
            if(resp.ok) {
                resp.json().then((newCar) => {
                onAddNewCar(newCar)
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
        <form className="new-dealer-form" onSubmit={handleSubmit}>
            <span>Add New Car: </span>
            <input
            type="text"
            name="make"
            placeholder="Enter Make/Model Name.."
            value={carData.make}
            onChange={handleChange}
            />
            <input
            type="number"
            name="year"
            placeholder="Enter Year.."
            value={carData.year}
            onChange={handleChange}
            />
            <input
            type="text"
            name="color"
            placeholder="Enter Color.."
            value={carData.color}
            onChange={handleChange}
            />
              <input
            type="text"
            name="image"
            placeholder="Enter Image URL.."
            value={carData.image}
            onChange={handleChange}
            />
            <input
            type="number"
            name="mileage"
            placeholder="Enter Mileage.."
            value={carData.mileage}
            onChange={handleChange}
            />
             <input
            type="number"
            name="price"
            placeholder="Enter Price.."
            value={carData.price}
            onChange={handleChange}
            />
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