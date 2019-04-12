import React, { createContext } from 'react';
import characters from '../data/characters';

const AppContext = createContext();

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;

export const AppProvider = ({ children }) => (
  <Provider
    value={{
      characters
    }}
  >
    {children}
  </Provider>
);
