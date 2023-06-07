import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//! Custom hook, to write it simple context + Reducer
export const useWorkoutsContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider  "
    );
  }
  return context;
};
