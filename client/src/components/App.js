import { useEffect, useContext } from "react";
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
import NewDealer from "./NewDealer";
import NewCar from "./NewCar";
;



function App() {
  
  // const [cars, setCars] =useState([]);
  
  const {user, stayLoggedIn} = useContext(UserContext);
  const {currentDealer} = useContext(DealersContext);

  

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
                <DealerList />
              </Route>
              <Route exact path={`/dealers/${currentDealer.id}/cars`}>
                <CarList />
              </Route>
              <Route exact path="/dealers/new">
                <hr/>
                <NewDealer/>
              </Route>
              <Route exact path={`/dealers/${currentDealer.id}/cars/new`}>
                <hr/>
                <NewCar/>
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
