import { createContext } from "react";


export const GlobalContext = createContext();

export const GlobalProvider= (props) => {
    return (
        <GlobalContext.Provider value ={{   name : "abdullah"}}> 
            {props.children}
        </GlobalContext.Provider>
    )
}

