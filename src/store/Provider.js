import StoreContext from "./StoreContext";
import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import logger from "./logger";

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(logger(reducer), initState);

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
}

export default Provider;