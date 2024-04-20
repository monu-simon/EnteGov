import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext(); // Create a new context

export const useLoading = () => useContext(LoadingContext); // Custom hook to access context

export const LoadingProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false); // Define loading state

    // Function to toggle loading state
    const toggleLoading = (status) => {
        setLoading(status);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, toggleLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
