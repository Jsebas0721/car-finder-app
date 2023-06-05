import React, {useState} from "react";
import UpdateCar from "./UpdateCar";

function Car({car, onUpdateCar, onDeleteCar}){

    const [isUpdating, setIsUpdating] = useState(false);
    
    const {id, make, year, color, image, mileage, price} = car
    

    function handleIsUpdating(updatedCar){
        setIsUpdating(false)
        onUpdateCar(updatedCar)
    }

    function handleDeleteCar(){
        fetch(`/cars/${id}`,{
            method: "DELETE",
        });

        onDeleteCar(car)
    }

    return (
        <div className="car-card">
            {isUpdating ? (
                <UpdateCar
                  car={car}
                  onUpdateCar={handleIsUpdating}
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
            <button onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>UPDATE</button>
            <button onClick={handleDeleteCar}>DELETE</button>
        </div>
    )
}

export default Car;