import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {
  
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
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
