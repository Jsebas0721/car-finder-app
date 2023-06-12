import React, { createContext, useContext, useState } from "react";
import { DealersContext } from "./dealers";

const CarsContext = createContext(null);

function CarsProvider({children}){

    const [cars, setCars] = useState([]);
    const {dealers, setDealers} = useContext(DealersContext);

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

    return <CarsContext.Provider value={{cars, setCars, handleUpdateCar, handleAddNewCar, handleDeleteCar}}>{children}</CarsContext.Provider>
}

export { CarsContext, CarsProvider};