import React, {useState, createContext} from "react";

const UserContext = createContext(null);

function UserProvider({children}){
    const [user, setUser] = useState(null);

    function stayLoggedIn(){
        fetch("/me").then((response) => {
            if (response.ok) {
              response.json().then((user) => setUser(user));
            }
          });
    }

    return <UserContext.Provider  value={ {user, setUser, stayLoggedIn} }>{children}</UserContext.Provider>
}

export { UserContext, UserProvider};
