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
                <CarList cars={cars} setCars={setCars} />
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
