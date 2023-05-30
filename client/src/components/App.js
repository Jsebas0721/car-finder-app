import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import DealerList from "./DealerList";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className="App">
      <Header user={user}/>
      <NavBar user={user} setUser={setUser}/>
      {user ? (
          <DealerList/>
        ) : (
        <Switch>
          <Route exact path="/signup">
            <SignUp setUser={setUser}/>
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} /> 
            <Home/>
          </Route>
          <Home/>
        </Switch>
        )}
        
    </div>
  );
}

export default App;
