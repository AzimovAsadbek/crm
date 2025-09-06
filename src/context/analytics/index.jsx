import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reducer.js";

export const AnalyticsContext = createContext(null);

const AnalyticsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AnalyticsContext.Provider value={[state, dispatch]}>{children}</AnalyticsContext.Provider>
    );
}
export default AnalyticsProvider;