import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reduser.js";

export const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>
    );
}
export default UserProvider;