import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

const workoutsReducer = (state,action) => {
    

};

export const WorkoutsContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });
  return (
    <WorkoutContext.Provider value={{ workouts: [] }}>
      {children}
    </WorkoutContext.Provider>
  );
};
