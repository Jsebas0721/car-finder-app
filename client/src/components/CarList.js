import React, { useContext } from "react";
import Car from "./Car";
import NewCar from "./NewCar";
import { DealersContext } from "../context/dealers";

function CarList({cars, setCars}){

    const {dealers,setDealers} = useContext(DealersContext);

    function handleUpdateCar(updatedCar){
        const updatedCars = cars.map((car) => {
            if(car.id === updatedCar.id){
                return updatedCar;
            }else{
                return car;
            }
        });
        setCars(updatedCars);
        const updatedDealers = dealers.map((dealer)=>{
            if(dealer.id === updatedCar.dealer_id){
                return {...dealer, cars: updatedCars};
            }else{
                return dealer;
          }
        });
        setDealers(updatedDealers)
        console.log("Car Updated: ", updatedCar)
    }
    
    function handleDeleteCar(deletedCar){
        const updatedCars = cars.filter((car) => car.id !== deletedCar.id)
        setCars(updatedCars)
        const updatedDealers = dealers.map((dealer) => {
            if(dealer.id === deletedCar.dealer_id){
                return {...dealer, cars: updatedCars}
            }else{
                return dealer;
            }
        })
        setDealers(updatedDealers);
    }
    
    function handleAddNewCar(newCar){
        setCars([...cars, newCar]);
        const updatedDealers = dealers.map((dealer)=> {
            if(dealer.id === newCar.dealer_id){
                return {...dealer, cars: [...dealer.cars, newCar]};
            }else{
                return dealer;
            }
        }); 
        setDealers(updatedDealers);
    } 

    const carsList = cars.map((car)=> (
        <Car key={car.id} car={car} onUpdateCar={handleUpdateCar} onDeleteCar={handleDeleteCar}/>
    )) 

    return(
        <ul className="car-container">
            <hr/>
            <NewCar onAddNewCar={handleAddNewCar}/>
            <h1>Cars For Sale:</h1>
            {carsList}
        </ul>
    )
}

export default CarList;