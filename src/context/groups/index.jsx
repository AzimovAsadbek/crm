import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reduser.js";

export const GroupContext = createContext(null);

const GroupProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GroupContext.Provider value={[state, dispatch]}>{children}</GroupContext.Provider>
    );
}
export default GroupProvider;