import React, { createContext, useState } from 'react'

export const ChoiceContext = createContext();

function ChoiceContextProvider(props){

    const [IDs, setIDs] = useState([]);

    const onUpdateIDs = (data)=>{
        setIDs([...data]);
    }

    return(
        <ChoiceContext.Provider value={{IDs, onUpdateIDs}}>
            {props.children}
        </ChoiceContext.Provider>
    )
}

export default ChoiceContextProvider;