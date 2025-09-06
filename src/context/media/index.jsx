import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reducer.js";

export const MediaContext = createContext(null);

const MediaProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <MediaContext.Provider value={[state, dispatch]}>{children}</MediaContext.Provider>
    );
}
export default MediaProvider;