import React, { createContext, useContext, useReducer } from 'react';

// Creates data layer
export const StateContext = createContext();

// Wrap the app and provide the data layer for all components
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState) } >
        {children}
    </StateContext.Provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);