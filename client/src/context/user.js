import React, {useState, createContext} from "react";
import { useHistory } from "react-router-dom";

const UserContext = createContext(null);

function UserProvider({children}){
    const [user, setUser] = useState(null);

    const history = useHistory();

    function stayLoggedIn(){

        fetch("/me").then((response) => {
            if (response.ok) {
              response.json().then((user) => setUser(user));
            }else{
              history.push("/");
            }
          });
    }

    return <UserContext.Provider  value={ {user, setUser, stayLoggedIn} }>{children}</UserContext.Provider>
}

export { UserContext, UserProvider};
