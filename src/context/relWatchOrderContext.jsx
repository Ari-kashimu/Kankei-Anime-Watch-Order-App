import { useRelWatchOrderQuery } from "@/logic/services/relWatchOrderQuery";
import { createContext, useContext } from "react";

// Create context
const RelWatchOrderContext = createContext(null);

// Provider

export function RelWatchOrderProvider({ children }) {
    const watchOrder = useRelWatchOrderQuery();

    return (
        <RelWatchOrderContext.Provider value={watchOrder}>
            {children}
        </RelWatchOrderContext.Provider>
    );
}

// Use Context custom hook
export function useRelWatchOrderContext() {
    const context = useContext(RelWatchOrderContext);

    return context;
}
