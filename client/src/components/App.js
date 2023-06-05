import { useState, useEffect, useContext } from "react";
import { Switch, Route } from 'react-router-dom';
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import DealerList from "./DealerList";
import CarList from "./CarList";
import { UserContext} from "../context/user";
import { DealersContext } from "../context/dealers";



function App() {
  
  const [cars, setCars] =useState([]);
  
  console.log(cars)
  const {dealers, setDealers, currentDealer} = useContext(DealersContext)
  const {user, stayLoggedIn} = useContext(UserContext);

  useEffect(() => {
    stayLoggedIn()
  },[]);

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

  return (
    <div className="App">
        <Header />
        <NavBar />
        {user ? (
            <Switch>
              <Route exact path="/dealers">
                <DealerList onSetCars={setCars} />
              </Route>
              <Route exact path={`/${currentDealer.name}/cars`}>
                <CarList cars={cars} onUpdateCar={handleUpdateCar} onDeleteCar={handleDeleteCar}/>
              </Route>
            </Switch>
          ) : (
          <Switch>
            <Route exact path="/signup">
              <SignUp/>
              <Home/>
            </Route>
            <Route exact path="/login">
              <Login /> 
              <Home/>
            </Route>
            <Home/>
          </Switch>
          )}
    </div>
  );
}

export default App;
