import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

export const initState = {
  ACount: 0,
};

const CountCtx = createContext(null);

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <CountCtx.Provider value={{ state, dispatch }}>
      {props.children}
    </CountCtx.Provider>
  );
};

export const useAStore = () => useContext(CountCtx);
