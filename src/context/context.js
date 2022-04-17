import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [leads, setLeads] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const objectStates = {
    isOpen,
    setIsOpen,
    leads,
    setLeads,
    employees,
    setEmployees,
    quotes,
    setQuotes
  }
  return (
    <Context.Provider value={ objectStates }>
      { children }
    </Context.Provider>
  );
}