import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reducer.js";

export const EmailContext = createContext(null);

const EmailProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <EmailContext.Provider value={[state, dispatch]}>{children}</EmailContext.Provider>
    );
}
export default EmailProvider;