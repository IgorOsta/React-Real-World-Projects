import { useAuthContext } from "./useUserContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  //* Logging out the application
  const logout = () => {
    //* remove user from local storage
    localStorage.removeItem("user");
    //*dispatch a logout action
    dispatch({ type: "LOGOUT" });
  };
  return logout;
};
