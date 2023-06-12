import React, {useContext, useState} from "react";
import UpdateCar from "./UpdateCar";
import { UserContext } from "../context/user";
import { DealersContext } from "../context/dealers";
import { CarsContext } from "../context/cars";

function Car({car}){

    const [isUpdating, setIsUpdating] = useState(false);

    const {user} = useContext(UserContext);
    const {currentDealer} = useContext(DealersContext)
    const {handleDeleteCar} = useContext(CarsContext);

    const {id, make, year, color, image, mileage, price} = car


 
    

    // function handleIsUpdating(updatedCar){
    //     setIsUpdating(false)
    //     handleUpdateCar(updatedCar)
    // }

    function handleDelete(){
        fetch(`/cars/${id}`,{
            method: "DELETE",
        });

       handleDeleteCar(car)
    }

    const carOwner = currentDealer.users ? currentDealer.users.find((user)=> user.id === car.user_id) : user
   
    return (
        <div className="car-card">
            {isUpdating ? (
                <UpdateCar
                  car={car}
                  setIsUpdating={setIsUpdating}
                /> 
            ) : (
                <div>
                    <div className="car-image">
                        <img 
                        alt="car" 
                        src={image}
                        className="car-image"
                        />
                    </div>  
                    <div className="car-info">
                        <p>{year} {make}</p>
                        <p>Color: {color}</p>
                        <p>Mileage: {Intl.NumberFormat().format(mileage)}</p>
                        <p>Price: ${Intl.NumberFormat().format(price)}</p>   
                    </div> 
                </div>
            )}
            {user && user.id === car.user_id ? (<>
                <button onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>UPDATE</button>
                <button onClick={handleDelete}>DELETE</button>
            </>) : null}
            <p className="car-owner">Listed By: {carOwner.username}</p>
        </div>
    )
}

export default Car;