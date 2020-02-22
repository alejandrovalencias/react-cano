import React from 'react';

const funcionPrueba = () => {
    alert("Hola Mundo")
}
export const ContextPrueba = React.createContext({
    funcionPrueba
})
export const ProviderContext = (props) => {
    const xd = "hola"
    return (
        <ContextPrueba.Provider value={{
           xd
        }}>
            {props.children}
        </ContextPrueba.Provider>
    )
}