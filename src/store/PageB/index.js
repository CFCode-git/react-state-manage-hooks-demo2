import { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";

export const initState = {
  BCount: 0,
};

const BContext = createContext(null);

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <BContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BContext.Provider>
  );
};

export const useBStore = () => useContext(BContext);
