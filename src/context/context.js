import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const objectStates = {
    isOpen,
    setIsOpen
  }
  return (
    <Context.Provider value={ objectStates }>
      { children }
    </Context.Provider>
  );
}