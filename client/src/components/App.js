import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
