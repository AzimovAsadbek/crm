import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reducer.js";

export const MoliyaContext = createContext(null);

const MoliyaProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <MoliyaContext.Provider value={[state, dispatch]}>{children}</MoliyaContext.Provider>
    );
}
export default MoliyaProvider;