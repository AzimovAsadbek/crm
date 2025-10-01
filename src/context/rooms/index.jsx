import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reduser.js";

export const RoomsContext = createContext(null);

const RoomsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <RoomsContext.Provider value={[state, dispatch]}>{children}</RoomsContext.Provider>
    );
}
export default RoomsProvider;