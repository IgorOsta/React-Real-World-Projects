import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//! Custom hook, to write it simple context + Reducer
export const useWorkoutsContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an UserContextProvider  ");
  }
  return context;
};
