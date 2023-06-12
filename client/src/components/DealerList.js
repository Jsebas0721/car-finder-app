import React, { useContext, useEffect} from "react";
import Dealer from "./Dealer";
import { DealersContext } from "../context/dealers";
import { CarsContext } from "../context/cars";


function DealerList(){

    const {dealers, getDealers} = useContext(DealersContext);
    const {setCars} = useContext(CarsContext);
    
    
    useEffect(()=> {
        getDealers();
        setCars(null)
    },[]);

    

    const dealershipList = dealers.map((dealer)=> (
        <Dealer key={dealer.id} dealer={dealer} />
    ))
    return (
        <ul className="dealer-container">
            <hr/>
            <h1>DEALERS:</h1>
            {dealershipList}
        </ul>
    )

    
}

export default DealerList;