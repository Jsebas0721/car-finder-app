import React from "react";


function Header({ user }) {


  return (
    <div className="app-header">
      <header >
        <h1>Car Finder App</h1>
        {user && (
          <h3>Welcome, {user.username}</h3>
        )}
      </header>
    </div>
  );
}

export default Header;