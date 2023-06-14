import { useAuthContext } from "./useUserContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutsContext();
  //* Logging out the application
  const logout = () => {
    //* remove user from local storage
    localStorage.removeItem("user");
    //*dispatch a logout action
    dispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return logout;
};
