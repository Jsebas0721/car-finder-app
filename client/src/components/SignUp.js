import React, { useContext, useState} from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";

function SignUp() {

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors]= useState([]);
  
  const {setUser} = useContext(UserContext);
  const history = useHistory(); 

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) =>{ 
          setUser(user)
          history.push("/dealers");
        });
      }else{
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  return (
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>Username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label>Password Confirmation:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /><br/>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <button type="submit">Sign Up</button>
      </form>
  );
}

export default SignUp;