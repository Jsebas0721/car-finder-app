import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
import { CarsContext } from "../context/cars";
import { DealersContext } from "../context/dealers";

function NavBar() {
  
  const { user, setUser } = useContext(UserContext);
  const { cars} = useContext(CarsContext);
  const {currentDealer} = useContext(DealersContext);

  const history = useHistory();

  const linkStyles = {
    width: "50px",
    padding: "10px",
    margin: "0 2px 2px",
    color: "white",
  };

  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });

    history.push("/");
  }


  return (
    <div className="nav-bar">
      <header >
        <div className="buttons-logs">
          {user ? (
            <div>
              <h3>Welcome, {user.username}</h3>
              <button onClick={handleLogoutClick}>
              Logout
              </button>
              {cars == null ? (
                <div className="dealers-link">
                  <NavLink
                    to="/dealers"
                    style={linkStyles} 
                  >
                  Dealers  
                  </NavLink>
                  <NavLink
                    to="/dealers/new"
                    style={linkStyles} 
                  >
                  New Dealer  
                  </NavLink>
                </div>
              ) : (
                <div className="cars-link">
                  <NavLink
                  to="/dealers"
                  style={linkStyles} 
                  >
                  Dealers  
                  </NavLink>
                  <NavLink
                  to={`/dealers/${currentDealer.id}/cars`}
                  style={linkStyles}
                  >
                  Cars
                  </NavLink>
                  <NavLink
                  to={`/dealers/${currentDealer.id}/cars/new`}
                  style={linkStyles}
                  >
                  New Car
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <div className="buttons-logs">
              <NavLink 
               to="/signup"
               style={linkStyles}
              >
              Signup
              </NavLink>
              <NavLink 
              to="/login"
              style={linkStyles}
              >
              Login
              </NavLink>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
