import React, {useState} from "react";
import UpdateCar from "./UpdateCar";

function Car({car, onUpdateCar}){

    const [isUpdating, setIsUpdating] = useState(false);
    
    const {make, year, color, image, mileage, price} = car
    

    function handleIsUpdating(updatedCar){
        setIsUpdating(false)
        onUpdateCar(updatedCar)
    }
    // function handleDeletePosition(){
    //     fetch(`http://localhost:9292/positions/${id}`,{
    //         method: "DELETE",
    //     });

    //     onDeletePosition(position)
    // }

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
            <button >DELETE</button>
        </div>
    )
}

export default Car;