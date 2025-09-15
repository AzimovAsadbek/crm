import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reduser.js";

export const AllLidsContext = createContext(null);

const AllLidsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AllLidsContext.Provider value={[state, dispatch]}>{children}</AllLidsContext.Provider>
    );
}
export default AllLidsProvider;