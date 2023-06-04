import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function Login() {

  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]= useState({});
  console.log(error)
  const history = useHistory(); 

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
          history.push("/dealers");
        });    
      }else{
        resp.json().then((errorData) => setError(errorData.error))
        
      }
    });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.length > 0 && (
          <ul style={{ color: "red" }}>
            <li key={error}>{error}</li>
          </ul>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;