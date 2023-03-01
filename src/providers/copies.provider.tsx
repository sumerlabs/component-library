import React, { useContext } from "react";
import { fallbackCopies } from '~/providers/fallback.copies';

const CopiesContext = React.createContext({
    t: (key: string) => key,
});

export function CopiesContextProvider({ children } : { children: React.ReactNode}) {
    const t = (path: string) : string => {
        return path.split('.').reduce(function(prev, curr) {
            return prev ? prev[curr] : null
        }, fallbackCopies)
    }

    return (
        <CopiesContext.Provider value={{
            t,
        }}>
            {children}
        </CopiesContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(CopiesContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
