import React, { useState, useContext } from "react"
import useFetch from "./useFetch"


const AppContext = React.createContext()


const AppProvider = ({children}) => {

    const [query, setQuery] = useState("batman")

    const { loading, error, data: movies } = useFetch(`&s=${query}`)

    return (
        <AppContext.Provider
            value={{
                query,
                setQuery,
                loading,
                error,
                movies
            }}
        >
            {children}
        </AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)

}


export {
    AppProvider,
    useGlobalContext
}