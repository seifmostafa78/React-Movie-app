import { reducer } from "./reducer";
import {createContext , useEffect, useReducer}  from 'react'

const initialState = {
    watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
    watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}

export const GlobalContext = createContext(initialState)

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            MoviesDispatch: dispatch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;