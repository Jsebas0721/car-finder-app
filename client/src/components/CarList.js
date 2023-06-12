import React, { useContext,useEffect } from "react";
import Car from "./Car";

import { CarsContext } from "../context/cars";
import { UserContext } from "../context/user";



function CarList(){

    const {cars} = useContext(CarsContext);
    const {user} = useContext(UserContext);


    // // if(user){
    //     history.push(`/dealers/${currentDealer.id}/cars`)
    // }  
    // console.log(user);
    // useEffect(()=> {
    //     setCars(currentDealer.cars)
       
    // },[])
    // function handleUpdateCar(updatedCar){
    //     const updatedCars = cars.map((car) => {
    //         if(car.id === updatedCar.id){
    //             return updatedCar;
    //         }else{
    //             return car;
    //         }
    //     });
    //     setCars(updatedCars);
    //     const updatedDealers = dealers.map((dealer)=>{
    //         if(dealer.id === updatedCar.dealer_id){
    //             return {...dealer, cars: updatedCars};
    //         }else{
    //             return dealer;
    //       }
    //     });
    //     setDealers(updatedDealers)
    //     console.log("Car Updated: ", updatedCar)
    // }
    
    // function handleDeleteCar(deletedCar){
    //     const updatedCars = cars.filter((car) => car.id !== deletedCar.id)
    //     setCars(updatedCars)
    //     const updatedDealers = dealers.map((dealer) => {
    //         if(dealer.id === deletedCar.dealer_id){
    //             return {...dealer, cars: updatedCars}
    //         }else{
    //             return dealer;
    //         }
    //     })
    //     setDealers(updatedDealers);
    // }
    
    // function handleAddNewCar(newCar){
    //     setCars([...cars, newCar]);
    //     const updatedDealers = dealers.map((dealer)=> {
    //         if(dealer.id === newCar.dealer_id){
    //             return {...dealer, cars: [...dealer.cars, newCar]};
    //         }else{
    //             return dealer;
    //         }
    //     }); 
    //     setDealers(updatedDealers);
    // } 

    // const carsList = cars.map((car)=> (
    //     <Car key={car.id} car={car} />
    // )) 

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