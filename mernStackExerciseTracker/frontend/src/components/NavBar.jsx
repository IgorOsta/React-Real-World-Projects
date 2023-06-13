import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useUserContext";
const NavBar = () => {
  const { user } = useAuthContext();
  const logout = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <header
      style={{
        display: "flex",
        alignContent: "end",
      }}
    >
      <div>
        <Link to="/">
          <h1>Workout Buddy </h1>
        </Link>
        <nav>
          <div>{user && <div> {user.email}</div>}</div>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link
              to="/login"
              style={{
                marginLeft: "10px",
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{
                marginLeft: "10px",
              }}
            >
              Signup
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
