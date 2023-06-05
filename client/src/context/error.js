import React, { createContext, useState } from "react";

const ErrorContext = createContext(null);

function ErrorProvider({children}){

    const [errors, setErrors]= useState({});

    return <ErrorContext.Provider value={{errors, setErrors}}>{children}</ErrorContext.Provider>
}

export {ErrorContext, ErrorProvider};