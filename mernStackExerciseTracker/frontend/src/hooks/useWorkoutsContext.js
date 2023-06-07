import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

//! Custom hook, to write it simple context + Reducer
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider  "
    );
  }
  return context;
};
